package com.telecom.service;

import com.telecom.client.SoaClient;
import com.telecom.model.SimOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SimOrderService {
    @Autowired
    private SoaClient soaClient;

    public SimOrder placeSimOrder(SimOrder order) {
        String soaOrderId = soaClient.invokeSoaService(order);
        order.setOrderId(System.currentTimeMillis()); // Simulated ID
        return order;
    }
}