import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/Facility';

@Component({
  selector: 'app-facilities-edit',
  templateUrl: './facilities-edit.component.html',
  styleUrls: ['./facilities-edit.component.css']
})
export class FacilitiesEditComponent implements OnInit {
  facilitiesList: Facility[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }

}
