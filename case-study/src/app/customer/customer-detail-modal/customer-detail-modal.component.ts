import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';

@Component({
  selector: 'app-customer-detail-modal',
  templateUrl: './customer-detail-modal.component.html',
  styleUrls: ['./customer-detail-modal.component.css']
})
export class CustomerDetailModalComponent implements OnInit {
 @Input() customer: Customer;
  constructor() { }

  ngOnInit(): void {
  }

}
