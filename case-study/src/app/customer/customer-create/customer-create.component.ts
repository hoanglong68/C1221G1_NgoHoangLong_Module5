import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {CustomerType} from '../../model/CustomerType';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customerTypeList: CustomerType[] = [];
  submit = false;

  constructor(private customerService: CustomerService, private route: Router) {
    this.customerForm = new FormGroup({
      id: new FormControl('', [Validators.pattern(/^KH\-\d{4}$/)]),
      customerName: new FormControl('', [Validators.required]),
      customerDateOfBirth: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-\d{2}\-\d{2}$/)]),
      customerGender: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}|\d{12}$/)]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern(/^((\(84\)\+(90))|(\(84\)\+(91))|(090)|(091))\d{7}$/)]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl('', [Validators.required]),
      customerAddress: new FormControl('', [Validators.required]),
    });
    this.getCustomerTypeList();
    console.log(this.customerTypeList.length);
  }

  ngOnInit(): void {
  }

  public createCustomer() {
    this.submit = true;
    if (this.customerForm.valid) {
      console.log(this.customerForm);
      this.customerService.saveCustomer(this.customerForm.value).subscribe(next => {

        }, error => {

        }, () => {
          this.route.navigateByUrl('/customer/list');
        }
      );
    }
  }

  public getCustomerTypeList() {
    return this.customerService.getCustomerTypeList().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }
}
