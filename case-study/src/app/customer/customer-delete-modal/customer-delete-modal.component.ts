import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../model/Customer';
import {CustomerListComponent} from '../customer-list/customer-list.component';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-customer-delete-modal',
  templateUrl: './customer-delete-modal.component.html',
  styleUrls: ['./customer-delete-modal.component.css']
})
export class CustomerDeleteModalComponent implements OnInit {
  customer: Customer;
  @Input() customerName?: string;
  @Input() id?: string;
  @Output() emitId = new EventEmitter();
  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public deleteCustomer() {
    console.log(this.id);
    console.log(this.customerName);
    this.emitId.emit(this.id);
    // this.customerService.deleteCustomer(this.id).subscribe(() => {
    //   this.router.navigateByUrl('/customer/list');
    // });
  }
}
