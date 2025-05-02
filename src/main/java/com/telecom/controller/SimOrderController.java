package com.telecom.controller;

import com.telecom.model.SimOrder;
import com.telecom.service.SimOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sim-order")
public class SimOrderController {
    @Autowired
    private SimOrderService simOrderService;

    @PostMapping
    public SimOrder placeSimOrder(@RequestBody SimOrder order) {
        return simOrderService.placeSimOrder(order);
    }
}