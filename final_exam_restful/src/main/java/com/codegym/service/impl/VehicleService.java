package com.codegym.service.impl;

import com.codegym.model.Vehicle;
import com.codegym.repository.IVehicleRepository;
import com.codegym.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService implements IVehicleService {
    @Autowired
    private IVehicleRepository vehicleRepository;

    @Override
    public List<Vehicle> findAll() {
        return this.vehicleRepository.findAllByVehicleStatus(true);
    }

    @Override
    public void save(Vehicle vehicle) {
        this.vehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle findById(Integer id) {
        return this.vehicleRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(Vehicle vehicle) {
        Vehicle existVehicle = vehicle;
        existVehicle.setVehicleStatus(false);
        this.vehicleRepository.save(existVehicle);
    }

    @Override
    public List<Vehicle> searchBy(String name, String id) {
        if (id.equals("")) {
            return this.vehicleRepository.findAllByVehicleNameContainingAndVehicleStatus(name, true);
        } else {
            return this.vehicleRepository.findAllByVehicleNameContainingAndVehicleType_VehicleTypeIdAndVehicleStatus
                    (name, Integer.parseInt(id), true);
        }
    }
}
