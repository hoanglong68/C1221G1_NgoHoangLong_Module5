import {Injectable} from '@angular/core';
import {Facility} from '../model/Facility';
import {FacilityType} from '../model/FacilityType';
import {RentType} from '../model/RentType';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/Customer';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {
  facilityList: Facility[] = [];
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  submit = false;

  constructor(private http: HttpClient) {
  }

  public getFacilityList(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facilityList');
  }

 public getFacilityTypeList(): Observable<FacilityType[]> {
   return this.http.get<FacilityType[]>(API_URL + '/facilityTypeList');

 }

 public getRentTypeList(): Observable<RentType[]> {
   return this.http.get<RentType[]>(API_URL + '/rentTypeList');
 }
}
