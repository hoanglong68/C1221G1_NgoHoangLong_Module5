package com.codegym.repository;

import com.codegym.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IVehicleRepository extends JpaRepository<Vehicle, Integer> {
    List<Vehicle> findAllByVehicleStatus(boolean vehicleStatus);

    List<Vehicle> findAllByVehicleNameContainingAndVehicleType_VehicleTypeIdAndVehicleStatus(String name, Integer id, boolean status);

    List<Vehicle> findAllByVehicleNameContainingAndVehicleStatus(String name, boolean status);

}
