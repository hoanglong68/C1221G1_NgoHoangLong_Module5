import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Vehicle} from "../model/vehicle";
import {VehicleService} from "../service/vehicle.service";
import {VehicleType} from "../model/vehicle-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-real-estate-trans',
  templateUrl: './vehicle-park-list.component.html',
  styleUrls: ['./vehicle-park-listcomponent.css']
})
export class VehicleParkListComponent implements OnInit {
  vehicleList: Vehicle[] = [];
  vehicleTypeList: VehicleType[] = [];
  submit = false;
  vehicleNameToDelete: string;
  vehicleIdToDelete: string;
  @ViewChild('vehicleName') vehicleName: ElementRef;
  @ViewChild('vehicleTypeId') vehicleTypeId: ElementRef;

  constructor(private vehicleService: VehicleService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getVehicleList();
    this.getVehicleTypeList();
  }

  public getVehicleList() {
    return this.vehicleService.getVehicleList().subscribe(vehicleList => {
      this.vehicleList = vehicleList;
    });
  }

  public getVehicleTypeList() {
    return this.vehicleService.getVehicleTypeList().subscribe(vehicleTypeList => {
      this.vehicleTypeList = vehicleTypeList;
    });
  }

  sendVehicleInfoToDelete(name: string, id: string) {
    this.vehicleNameToDelete = name;
    this.vehicleIdToDelete = id;
  }

  public deleteVehicle($event: string) {
    console.log($event);
    this.vehicleService.deleteVehicle($event).subscribe(() => {
      this.ngOnInit();
    });
  }

  search() {
    this.vehicleService.searchVehicle(this.vehicleName.nativeElement.value,
      this.vehicleTypeId.nativeElement.value).subscribe(vehicleList => {
      this.vehicleList = vehicleList;
      this.route.navigateByUrl('/list');

    })
  }
}
