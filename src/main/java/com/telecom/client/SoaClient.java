package com.telecom.client;

import org.springframework.stereotype.Component;
import com.telecom.model.SimOrder;

@Component
public class SoaClient {
    public String invokeSoaService(SimOrder order) {
        // Simulated SOA service call
        return "SOA_ORDER_" + System.currentTimeMillis();
    }
}