import {Component, OnInit} from '@angular/core';
import {FacilitiesService} from '../../service/facilities.service';

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {

  constructor(private facilitiesService: FacilitiesService) {
  }

  ngOnInit(): void {
  }

}
