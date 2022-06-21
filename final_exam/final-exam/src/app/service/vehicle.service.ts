import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Vehicle} from "../model/vehicle";
import {VehicleType} from "../model/vehicle-type";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {
  }

  public getVehicleList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(API_URL + '/api/vehicle/vehicleList');
  }

  public getVehicleTypeList(): Observable<VehicleType[]> {
    return this.http.get<VehicleType[]>(API_URL + '/api/vehicle/vehicleTypeList');
  }

  public deleteVehicle(id: string): Observable<Vehicle> {
    return this.http.delete<Vehicle>(`${API_URL}/api/vehicle/vehicleDelete/${id}`);
  }

  public findById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${API_URL}/api/vehicle/vehicleBy/${id}`);
  }

  updateVehicle(id: string, vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${API_URL}/api/vehicle/vehicleEdit/${id}`, vehicle);
  }

  createVehicle(vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(API_URL + '/api/vehicle/vehicleCreate', vehicle);
  }

  searchVehicle(vehicleName: string, vehicleTypeId: string): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>
    (`${API_URL}/api/vehicle/searchingVehicle?vehicleName=${vehicleName}&vehicleTypeId=${vehicleTypeId}`)
  }
}
