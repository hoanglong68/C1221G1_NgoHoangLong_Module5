import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  customerPassToModal: Customer;
  customerNameToDelete: string;
  customerIdToDelete: number;
  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerList = this.customerService.findAll();
  }

  public sendCustomerInfoToDelete(name: string, id: number) {
    this.customerNameToDelete = name;
    this.customerIdToDelete = id;
    console.log(this.customerNameToDelete);
  }

  public sendCustomerToModal(customer: Customer) {
    this.customerPassToModal = customer;
  }

 public deleteCustomer($event: number) {
    this.customerService.deleteCustomerById($event);
    this.ngOnInit();
  }
}
