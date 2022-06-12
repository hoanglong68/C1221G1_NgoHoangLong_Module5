import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {CustomerListComponent} from '../../customer/customer-list/customer-list.component';

@Component({
  selector: 'app-customer-delete-modal',
  templateUrl: './customer-delete-modal.component.html',
  styleUrls: ['./customer-delete-modal.component.css']
})
export class CustomerDeleteModalComponent implements OnInit {
  @Input() customer: Customer;
  @Input() customerName: string;
  @Input() customerId: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  public deleteCustomer(customerId: number) {
  }
}
