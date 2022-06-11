import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/Facility';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  facilitiesList: Facility[] = [];

  constructor() {
    this.facilitiesList.push({
      facilityId: 'DV-001',
      facilityName: 'Villa Beach Front',
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
    });
    this.facilitiesList.push({
      facilityId: 'DV-002',
      facilityName: 'Villa Beach Front',
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
    });
    this.facilitiesList.push({
      facilityId: 'DV-003',
      facilityName: 'Villa Beach Back',
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
    });
    this.facilitiesList.push({
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
    });
    this.facilitiesList.push({
      facilityId: 'DV-005',
      facilityName: 'Villa Home Front',
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
    });
    this.facilitiesList.push({
      facilityId: 'DV-006',
      facilityName: 'Villa Sun Front',
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
    });
  }

  ngOnInit(): void {
  }

}
