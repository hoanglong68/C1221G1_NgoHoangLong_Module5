package com.codegym.service;

import com.codegym.model.Vehicle;

import java.util.List;

public interface IVehicleService {
    List<Vehicle> findAll();

    void save(Vehicle vehicle);

    Vehicle findById(Integer id);

    void delete(Vehicle vehicle);

    List<Vehicle> searchBy(String name, String id);
}
