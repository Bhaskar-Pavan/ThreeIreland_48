package com.telecom.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private boolean hasActiveSim;
    private Date lastSimOrder;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public boolean isHasActiveSim() { return hasActiveSim; }
    public void setHasActiveSim(boolean hasActiveSim) { this.hasActiveSim = hasActiveSim; }
    public Date getLastSimOrder() { return lastSimOrder; }
    public void setLastSimOrder(Date lastSimOrder) { this.lastSimOrder = lastSimOrder; }
}