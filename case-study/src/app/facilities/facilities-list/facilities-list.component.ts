import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/Facility';
import {FacilitiesService} from '../../service/facilities.service';
import {FacilityType} from '../../model/FacilityType';
import {RentType} from '../../model/RentType';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  facilityList: Facility[] = [];
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];

  constructor(private facilitiesService: FacilitiesService) {
  }

  ngOnInit(): void {
    this.getFacilityList();
  }

  public getFacilityList() {
    return this.facilitiesService.getFacilityList().subscribe(facilityList => {
      this.facilityList = facilityList;
    });
  }
}
