package com.codegym.controller;

import com.codegym.dto.VehicleDto;
import com.codegym.model.Vehicle;
import com.codegym.model.VehicleType;
import com.codegym.service.IVehicleService;
import com.codegym.service.IVehicleTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/vehicle")
public class VehicleRestController {
    @Autowired
    private IVehicleService vehicleService;
    @Autowired
    private IVehicleTypeService vehicleTypeService;

    @ModelAttribute("vehicleTypeList")
    public List<VehicleType> vehicleTypeList() {
        return this.vehicleTypeService.findAll();
    }

    @GetMapping("/vehicleList")
    public ResponseEntity<List<Vehicle>> getVehicleList() {
        List<Vehicle> vehicleList = this.vehicleService.findAll();
        if (vehicleList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(vehicleList, HttpStatus.OK);
        }
    }

    @GetMapping("/vehicleTypeList")
    public ResponseEntity<List<VehicleType>> getVehicleTypeList() {
        List<VehicleType> vehicleTypeList = this.vehicleTypeList();
        if (vehicleTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(vehicleTypeList, HttpStatus.OK);
        }
    }

    @PostMapping(value = "/vehicleCreate")
    public ResponseEntity<List<FieldError>> createVehicle(@Validated @RequestBody VehicleDto vehicleDto,
                                                          BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Vehicle vehicle = new Vehicle();
        VehicleType vehicleType = new VehicleType();
        vehicleType.setVehicleTypeId(vehicleDto.getVehicleType().getVehicleTypeId());
        vehicle.setVehicleType(vehicleType);
        BeanUtils.copyProperties(vehicleDto, vehicle);
        this.vehicleService.save(vehicle);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(value = "/vehicleEdit/{id}")
    public ResponseEntity<List<FieldError>> editVehicle(@Validated @RequestBody VehicleDto vehicleDto,
                                                        @PathVariable Integer id,
                                                        BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Vehicle vehicle = new Vehicle();
        VehicleType vehicleType = new VehicleType();
        vehicleType.setVehicleTypeId(vehicleDto.getVehicleType().getVehicleTypeId());
        vehicle.setVehicleId(id);
        vehicle.setVehicleType(vehicleType);
        BeanUtils.copyProperties(vehicleDto, vehicle);
        this.vehicleService.save(vehicle);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/vehicleBy/{id}")
    public ResponseEntity<Vehicle> getCustomerById(@PathVariable Integer id) {
        Vehicle vehicle = this.vehicleService.findById(id);
        if (vehicle == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(vehicle, HttpStatus.OK);
    }

    @DeleteMapping(value = "/vehicleDelete/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Integer id) {
        Vehicle vehicle = this.vehicleService.findById(id);
        if (vehicle == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        this.vehicleService.delete(vehicle);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/searchingVehicle")
    public ResponseEntity<List<Vehicle>> getVehicleList(@RequestParam Optional<String> vehicleName,
                                                        @RequestParam Optional<String> vehicleTypeId) {
        String name = vehicleName.orElse("");
        String id = vehicleTypeId.orElse("%");
        List<Vehicle> vehicleSearchedList = this.vehicleService.searchBy(name, id);
        if (vehicleSearchedList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(vehicleSearchedList, HttpStatus.OK);
        }
    }
}
