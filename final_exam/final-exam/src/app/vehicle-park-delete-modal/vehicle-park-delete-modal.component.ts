import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VehicleService} from "../service/vehicle.service";

@Component({
  selector: 'app-vehicle-park-delete-modal',
  templateUrl: './vehicle-park-delete-modal.component.html',
  styleUrls: ['./vehicle-park-delete-modal.component.css']
})
export class VehicleParkDeleteModalComponent implements OnInit {
  @Input() id?: string;
  @Input() name?: string;
  @Output() emitId = new EventEmitter();
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }
  public deleteVehicle() {
    console.log(this.id);
    console.log(this.name);
    this.emitId.emit(this.id);
  }
}
