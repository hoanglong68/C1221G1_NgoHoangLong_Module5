import {Injectable} from '@angular/core';
import {Customer} from '../model/Customer';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/CustomerType';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];
  customerTypeList: CustomerType[] = [];
  submit = false;

  constructor(private http: HttpClient) {
  }

  public getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/api/customer' + '/customerList');
  }

  public getCustomerTypeList(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API_URL + '/api/customer' + '/customerTypeList');
  }

  public saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/api/customer' + '/customerCreate', customer);
  }

  public deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/api/customer/customerDelete/${id}`);
  }

  public findById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/api/customer/customerBy/${id}`);
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/api/customer/customerEdit/${id}`, customer);
  }
}
