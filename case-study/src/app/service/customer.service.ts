import {Injectable} from '@angular/core';
import {Customer} from '../model/Customer';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];
  submit = false;

  constructor(private router: Router) {
    this.customerList.push({
      customerId: 1,
      customerName: 'long1',
      customerDateOfBirth: '2000-01-01',
      customerGender: 1,
      customerIdCard: '1001',
      customerPhone: '0905123123',
      customerEmail: 'long1@gmail.com',
      customerType: {
        id: 1,
        type: 'diamond'
      },
      customerAddress: 'DN'
    });
    this.customerList.push({
      customerId: 2,
      customerName: 'long2',
      customerDateOfBirth: '2000-01-01',
      customerGender: 0,
      customerIdCard: '1001',
      customerPhone: '0905123123',
      customerEmail: 'long2@gmail.com',
      customerType: {
        id: 1,
        type: 'diamond'
      },
      customerAddress: 'DN'
    });
    this.customerList.push({
      customerId: 3,
      customerName: 'long3',
      customerDateOfBirth: '2000-01-01',
      customerGender: 1,
      customerIdCard: '1001',
      customerPhone: '0905123123',
      customerEmail: 'long3@gmail.com',
      customerType: {
        id: 2,
        type: 'platinum'
      },
      customerAddress: 'DN'
    });
  }

  public findAll() {
    return this.customerList;
  }

  public createCustomer(customerForm: FormGroup) {
    if (customerForm.valid) {
      this.customerList.push(customerForm.value);
      this.router.navigateByUrl('/customer-list');
    }
  }

  public deleteCustomerById(customerId: number) {
    this.customerList = this.customerList.filter(customer => customer.customerId !== customerId);
  }

  public findById(id: number) {
    for (const customer of this.customerList) {
      if (customer.customerId === id) {
        return customer;
      }
    }
    return undefined;
  }
}
