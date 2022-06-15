import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/Customer';
import {CustomerType} from '../../model/CustomerType';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  confirmCustomer: Customer;
  customerForm: FormGroup;
  customerTypeList: CustomerType[] = [];
  submit = false;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private route: Router) {
    this.getCustomerTypeList();
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const customerId = paramMap.get('customerId');
      if (customerId != null) {
        this.confirmCustomer = this.customerService.findById(customerId);
      }
    });
    this.customerForm = new FormGroup({
      customerId: new FormControl(this.confirmCustomer.customerId, [Validators.pattern(/^KH\-\d{4}$/)]),
      customerName: new FormControl(this.confirmCustomer.customerName, [Validators.required]),
      customerDateOfBirth: new FormControl(this.confirmCustomer.customerDateOfBirth,
        [Validators.required, Validators.pattern(/^\d{4}\-\d{2}\-\d{2}$/)]),
      customerGender: new FormControl(this.confirmCustomer.customerGender, [Validators.required]),
      customerIdCard: new FormControl(this.confirmCustomer.customerIdCard, [Validators.required,
        Validators.pattern(/^\d{9}|\d{12}$/)]),
      customerPhone: new FormControl(this.confirmCustomer.customerPhone, [Validators.required,
        Validators.pattern(/^((\(84\)\+(90))|(\(84\)\+(91))|(090)|(091))\d{7}$/)]),
      customerEmail: new FormControl(this.confirmCustomer.customerEmail, [Validators.required,
        Validators.email]),
      customerType: new FormControl(this.confirmCustomer.customerType, [Validators.required]),
      customerAddress: new FormControl(this.confirmCustomer.customerAddress, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  public editCustomer() {
    this.submit = true;
    console.log(this.customerForm);
    if (this.customerForm.valid) {
      this.customerService.editCustomer(this.customerForm.value);
      this.route.navigateByUrl('/customer/list');
    }
  }

  public getCustomerTypeList() {
    return this.customerService.getCustomerTypeList().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }
}
