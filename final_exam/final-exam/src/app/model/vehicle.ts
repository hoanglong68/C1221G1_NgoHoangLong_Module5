import {VehicleType} from "./vehicle-type";

export interface Vehicle {
  vehicleId: string;
  vehicleType: VehicleType;
  vehicleName: string;
  vehicleGoPosition: string;
  vehicleComePosition: string;
  vehiclePhone: string;
  vehicleEmail: string;
  vehicleGoTime: string;
  vehicleComeTime: string;
  vehicleStatus: boolean;
}
