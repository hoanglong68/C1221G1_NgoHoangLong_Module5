import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FacilitiesService} from '../../service/facilities.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-delete-modal',
  templateUrl: './facility-delete-modal.component.html',
  styleUrls: ['./facility-delete-modal.component.css']
})
export class FacilityDeleteModalComponent implements OnInit {
  @Input() facilityName?: string;
  @Input() id?: string;
  @Output() emitId = new EventEmitter();

  constructor(private facilitiesService: FacilitiesService,
              private route: Router) {
  }

  ngOnInit(): void {
  }
  public deleteFacility() {
    console.log(this.id);
    console.log(this.facilityName);
    this.emitId.emit(this.id);
  }
}
