import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/Contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];
  constructor() {
    this.contractList.push({
      id: 1,
      startDate: '2020-15-08',
      endDate: '2020-17-08',
      deposit: 0,
      total: 1000000,
      customer: {
        customerId: 1,
        customerName: 'long1',
        customerDateOfBirth: '2000-01-01',
        customerGender: 1,
        customerIdCard: '1001',
        customerPhone: '0905123123',
        customerEmail: 'long1@gmail.com',
        customerType: {
          id: 1,
          type: 'diamond'
        },
        customerAddress: 'DN'
      },
      facility: {
        facilityId: 'DV-004',
        facilityName: 'Villa Mountain Front',
        facilityArea: 25000,
        facilityPrice: 10000,
        facilityMaxOfPeople: 10,
        facilityRentType: {
          id: 1,
          rentType: 'day'
        },
        facilityType: {
          id: 1,
          facilityType: 'villa'
        },
        facilityStandardRoom: 'vip',
        facilityDescriptionOtherConvenience: 'Pool',
        facilityPoolArea: 500,
        facilityFloors: 4
      },
      serviceInclude: 'karaoke, buffet sáng, thuê xe đạp'
    });
    this.contractList.push({
      id: 2,
      startDate: '2021-12-08',
      endDate: '2021-15-08',
      deposit: 0,
      total: 1000000,
      customer: {
        customerId: 1,
        customerName: 'long1',
        customerDateOfBirth: '2000-01-01',
        customerGender: 1,
        customerIdCard: '1001',
        customerPhone: '0905123123',
        customerEmail: 'long1@gmail.com',
        customerType: {
          id: 1,
          type: 'diamond'
        },
        customerAddress: 'DN'
      },
      facility: {
        facilityId: 'DV-004',
        facilityName: 'Villa Mountain Front',
        facilityArea: 25000,
        facilityPrice: 10000,
        facilityMaxOfPeople: 10,
        facilityRentType: {
          id: 1,
          rentType: 'day'
        },
        facilityType: {
          id: 1,
          facilityType: 'villa'
        },
        facilityStandardRoom: 'vip',
        facilityDescriptionOtherConvenience: 'Pool',
        facilityPoolArea: 500,
        facilityFloors: 4
      },
      serviceInclude: 'karaoke, buffet sáng, thuê xe đạp'
    });
    this.contractList.push({
      id: 3,
      startDate: '2022-12-08',
      endDate: '2022-14-08',
      deposit: 0,
      total: 1000000,
      customer: {
        customerId: 1,
        customerName: 'long1',
        customerDateOfBirth: '2000-01-01',
        customerGender: 1,
        customerIdCard: '1001',
        customerPhone: '0905123123',
        customerEmail: 'long1@gmail.com',
        customerType: {
          id: 1,
          type: 'diamond'
        },
        customerAddress: 'DN'
      },
      facility: {
        facilityId: 'DV-004',
        facilityName: 'Villa Mountain Front',
        facilityArea: 25000,
        facilityPrice: 10000,
        facilityMaxOfPeople: 10,
        facilityRentType: {
          id: 1,
          rentType: 'day'
        },
        facilityType: {
          id: 1,
          facilityType: 'villa'
        },
        facilityStandardRoom: 'vip',
        facilityDescriptionOtherConvenience: 'Pool',
        facilityPoolArea: 500,
        facilityFloors: 4
      },
      serviceInclude: 'karaoke, buffet sáng, đi massa'
    });
    this.contractList.push({
      id: 4,
      startDate: '2021-12-08',
      endDate: '2021-13-08',
      deposit: 0,
      total: 1000000,
      customer: {
        customerId: 1,
        customerName: 'long1',
        customerDateOfBirth: '2000-01-01',
        customerGender: 1,
        customerIdCard: '1001',
        customerPhone: '0905123123',
        customerEmail: 'long1@gmail.com',
        customerType: {
          id: 1,
          type: 'diamond'
        },
        customerAddress: 'DN'
      },
      facility: {
        facilityId: 'DV-004',
        facilityName: 'Villa Mountain Front',
        facilityArea: 25000,
        facilityPrice: 10000,
        facilityMaxOfPeople: 10,
        facilityRentType: {
          id: 1,
          rentType: 'day'
        },
        facilityType: {
          id: 1,
          facilityType: 'villa'
        },
        facilityStandardRoom: 'vip',
        facilityDescriptionOtherConvenience: 'Pool',
        facilityPoolArea: 500,
        facilityFloors: 4
      },
      serviceInclude: 'karaoke, thuê xe đạp, đi massa đêm'
    });
  }

  ngOnInit(): void {
  }

}
