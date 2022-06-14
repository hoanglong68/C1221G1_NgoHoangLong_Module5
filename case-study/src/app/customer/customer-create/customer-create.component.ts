import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  submit = false;

  constructor(private customerService: CustomerService) {
    this.customerForm = new FormGroup({
      customerId: new FormControl('', [Validators.pattern(/^KH\\-\d{4}$/)]),
      customerName: new FormControl('', [Validators.required]),
      customerDateOfBirth: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-\d{2}\-\d{2}$/)]),
      customerGender: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}|\d{12}$/)]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern(/^((\(84\)\+(90))|(\(84\)\+(91))|(090)|(091))\d{7}$/)]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl('', [Validators.required]),
      customerAddress: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  public createCustomer() {
    this.submit = true;
    if (this.customerForm.valid) {
      console.log(this.customerForm);
      this.customerService.createCustomer(this.customerForm);
    }
  }
}
