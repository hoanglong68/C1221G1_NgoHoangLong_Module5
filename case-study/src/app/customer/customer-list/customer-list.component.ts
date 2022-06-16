import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerType} from '../../model/CustomerType';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  customerPassToModal: Customer;
  customerNameToDelete: string;
  customerIdToDelete: string;
  page: string | number = 0;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomerList();
  }

  public sendCustomerInfoToDelete(name: string, id: string) {
    this.customerNameToDelete = name;
    this.customerIdToDelete = id;
  }

  public sendCustomerToModal(customer: Customer) {
    this.customerPassToModal = customer;
  }

  public deleteCustomer($event: string) {
    this.customerService.deleteCustomer($event).subscribe(() => {
      this.ngOnInit();
    });
  }

  public getCustomerList() {
    return this.customerService.getCustomerList().subscribe(customerList => {
      this.customerList = customerList;
    });
  }
}
