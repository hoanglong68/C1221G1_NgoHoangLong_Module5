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
  customerEditForm: FormGroup;
  customerTypeList: CustomerType[] = [];
  id?: string;
  submit = false;

    constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private route: Router) {
  }

  ngOnInit(): void {
    this.getCustomerTypeList();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getCustomer(this.id);
      console.log(this.confirmCustomer.customerId);
    });
  }

  public editCustomer() {
    this.submit = true;
    console.log(this.customerEditForm);
    if (this.customerEditForm.valid) {
      this.customerService.updateCustomer(this.confirmCustomer.customerId, this.customerEditForm.value).subscribe(() => {
        this.route.navigateByUrl('/customer/list');
      });
    }
  }

  public getCustomerTypeList() {
    return this.customerService.getCustomerTypeList().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }

  public syncCustomer() {
    this.customerEditForm = new FormGroup({
      customerId: new FormControl(this.confirmCustomer.customerId),
      customerCode: new FormControl(this.confirmCustomer.customerId, [Validators.pattern(/^KH\-\d{4}$/)]),
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

  public getCustomer(id: string) {
    return this.customerService.findById(id).subscribe(customer => {
      this.confirmCustomer = customer;
      this.syncCustomer();
    });
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.customerType === t2.customerType : t1 === t2;
  }
}
