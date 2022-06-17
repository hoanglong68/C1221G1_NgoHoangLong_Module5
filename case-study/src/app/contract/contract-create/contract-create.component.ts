import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {ContractService} from '../../service/contract.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {Facility} from '../../model/Facility';
import {FacilitiesService} from '../../service/facilities.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;
  customerList: Customer[] = [];
  facilityList: Facility[] = [];

  submit = false;

  constructor(private contractService: ContractService,
              private route: Router,
              private customerService: CustomerService,
              private facilitiesService: FacilitiesService
  ) {
  }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      deposit: new FormControl(''),
      total: new FormControl(''),
      employee: new FormControl(''),
      customer: new FormControl(''),
      facility: new FormControl(''),
    });
    this.getCustomerList();
    this.getFacilityList();
  }

  public createContract() {
    this.submit = true;
    if (this.contractForm.valid) {
      console.log(this.contractForm);
      this.contractService.saveContract(this.contractForm.value).subscribe(() => {
        this.route.navigateByUrl('/contract/list');
      });
    }
  }

  public getCustomerList() {
    return this.customerService.getCustomerList().subscribe(customerList => {
      this.customerList = customerList;
    });
  }

  public getFacilityList() {
    return this.facilitiesService.getFacilityList().subscribe(facilityList => {
      this.facilityList = facilityList;
    });
  }
}
