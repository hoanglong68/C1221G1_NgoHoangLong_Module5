import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../model/Customer';
import {CustomerListComponent} from '../../customer/customer-list/customer-list.component';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-delete-modal',
  templateUrl: './customer-delete-modal.component.html',
  styleUrls: ['./customer-delete-modal.component.css']
})
export class CustomerDeleteModalComponent implements OnInit {
  @Input() customer: Customer;
  @Input() customerName?: string;
  @Input() customerId?: number;
  @Output() transferCustomer = new EventEmitter();
  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

 public deleteCustomer() {
    this.transferCustomer.emit(this.customerId);
    // this.customerService.deleteCustomerById(this.customerId);
  }
}
