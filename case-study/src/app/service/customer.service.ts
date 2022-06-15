import {Injectable} from '@angular/core';
import {Customer} from '../model/Customer';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
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
    return this.http.get<Customer[]>(API_URL + '/customerList');
  }

  public getCustomerTypeList(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API_URL + 'customerTypeList');
  }

  public createCustomer(customerForm: FormGroup) {
    if (customerForm.valid) {
      this.customerList.push(customerForm.value);
    }
  }

  public deleteCustomerById(customerId: string) {
    this.customerList = this.customerList.filter(customer => customer.customerId !== customerId);
  }

  public findById(id: string) {
    for (const customer of this.customerList) {
      if (customer.customerId === id) {
        return customer;
      }
    }
    return undefined;
  }

  public editCustomer(customer: Customer) {
    const indexToDelete = this.customerList.findIndex(item => item.customerId === customer.customerId);
    if (indexToDelete !== -1) {
      this.customerList[indexToDelete] = customer;
    }
  }
}
