import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {ContractService} from '../../service/contract.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;

  constructor(private contractService: ContractService) {
    this.contractForm = new FormGroup({
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      deposit: new FormControl(''),
      total: new FormControl(''),
      customer: new FormControl(''),
      facility: new FormControl(''),
      serviceInclude: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }
}
