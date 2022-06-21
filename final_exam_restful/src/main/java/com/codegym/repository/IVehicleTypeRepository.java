package com.codegym.repository;

import com.codegym.model.VehicleType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IVehicleTypeRepository extends JpaRepository<VehicleType, Integer> {
}
