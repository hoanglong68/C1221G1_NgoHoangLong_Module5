import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  newCustomer: Customer = null;

  constructor() {
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
      customerGender: 1,
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

  ngOnInit(): void {
  }

  private getCustomerById(id: number) {
    for (const customer of this.customerList) {
      if (customer.customerId === id) {
        this.newCustomer = customer;
        break;
      }
    }
    return this.newCustomer;
  }
}
