import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/Facility';
import {FacilitiesService} from '../../service/facilities.service';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  facilityList: Facility[] = [];

  constructor(private facilitiesService: FacilitiesService) {
    this.facilityList = facilitiesService.findAll();
  }

  ngOnInit(): void {
  }

}
