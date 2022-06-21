package com.codegym.dto;

import com.codegym.model.VehicleType;

public class VehicleDto {
    private Integer vehicleId;
    private String vehicleName;
    private String vehicleGoPosition;
    private String vehicleComePosition;
    private String vehiclePhone;
    private String vehicleEmail;
    private String vehicleGoTime;
    private String vehicleComeTime;
    private boolean vehicleStatus;
    private VehicleType vehicleType;

    public Integer getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(Integer vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getVehicleName() {
        return vehicleName;
    }

    public void setVehicleName(String vehicleName) {
        this.vehicleName = vehicleName;
    }

    public String getVehicleGoPosition() {
        return vehicleGoPosition;
    }

    public void setVehicleGoPosition(String vehicleGoPosition) {
        this.vehicleGoPosition = vehicleGoPosition;
    }

    public String getVehicleComePosition() {
        return vehicleComePosition;
    }

    public void setVehicleComePosition(String vehicleComePosition) {
        this.vehicleComePosition = vehicleComePosition;
    }

    public String getVehiclePhone() {
        return vehiclePhone;
    }

    public void setVehiclePhone(String vehiclePhone) {
        this.vehiclePhone = vehiclePhone;
    }

    public String getVehicleEmail() {
        return vehicleEmail;
    }

    public void setVehicleEmail(String vehicleEmail) {
        this.vehicleEmail = vehicleEmail;
    }

    public String getVehicleGoTime() {
        return vehicleGoTime;
    }

    public void setVehicleGoTime(String vehicleGoTime) {
        this.vehicleGoTime = vehicleGoTime;
    }

    public String getVehicleComeTime() {
        return vehicleComeTime;
    }

    public void setVehicleComeTime(String vehicleComeTime) {
        this.vehicleComeTime = vehicleComeTime;
    }

    public boolean isVehicleStatus() {
        return vehicleStatus;
    }

    public void setVehicleStatus(boolean vehicleStatus) {
        this.vehicleStatus = vehicleStatus;
    }

    public VehicleType getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(VehicleType vehicleType) {
        this.vehicleType = vehicleType;
    }
}
