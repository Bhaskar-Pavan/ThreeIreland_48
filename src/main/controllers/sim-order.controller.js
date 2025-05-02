const axios = require('axios');

exports.orderSim = async (req, res) => {
  try {
    const { deliveryName, addressLine1, addressLine2, city, postalCode, country } = req.body;
    if (country !== 'Ireland') {
      return res.status(400).json({ message: 'Only Ireland addresses are allowed' });
    }

    // Check customer status
    const customerResponse = await axios.get(`http://customer-service:8081/api/customer/${req.user.id}`);
    const customer = customerResponse.data;

    if (customer.hasActiveSim) {
      return res.status(400).json({ message: 'Customer already has an active SIM' });
    }

    if (customer.lastSimOrder && new Date(customer.lastSimOrder) > new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)) {
      return res.status(400).json({ message: 'Cannot order a SIM within 4 days of last order' });
    }

    // Place SIM order
    const orderResponse = await axios.post('http://sim-service:8082/api/sim-order', {
      customerId: req.user.id,
      deliveryName,
      addressLine1,
      addressLine2,
      city,
      postalCode,
      country
    });

    res.status(201).json({ message: 'SIM order placed successfully', orderId: orderResponse.data.orderId });
  } catch (error) {
    res.status(error.response?.status || 500).json({ message: error.response?.data?.message || 'Internal server error' });
  }
};