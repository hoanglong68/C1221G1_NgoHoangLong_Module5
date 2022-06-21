package com.codegym.service.impl;

import com.codegym.model.VehicleType;
import com.codegym.repository.IVehicleTypeRepository;
import com.codegym.service.IVehicleTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleTypeService implements IVehicleTypeService {
    @Autowired
    private IVehicleTypeRepository vehicleTypeRepository;

    @Override
    public List<VehicleType> findAll() {
        return vehicleTypeRepository.findAll();
    }
}
