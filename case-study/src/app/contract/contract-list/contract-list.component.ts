import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/Contract';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getContractList();
  }

  public getContractList() {
    return this.contractService.getContractList().subscribe(contractList => {
      this.contractList = contractList;
    });
  }
}
