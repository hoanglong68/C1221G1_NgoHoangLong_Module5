import {Component, OnInit} from '@angular/core';
import {Vehicle} from "../model/vehicle";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {VehicleType} from "../model/vehicle-type";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {VehicleService} from "../service/vehicle.service";

@Component({
  selector: 'app-vehicle-park-edit',
  templateUrl: './vehicle-park-edit.component.html',
  styleUrls: ['./vehicle-park-edit.component.css']
})
export class VehicleParkEditComponent implements OnInit {
  confirmVehicle: Vehicle;
  vehicleEditForm: FormGroup;
  vehicleTypeList: VehicleType[] = [];
  id?: string;
  submit = false;

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router,
              private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.getVehicleTypeList();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getVehicle(this.id);
      console.log(this.confirmVehicle.vehicleId);
    });
  }

  public getVehicleTypeList() {
    return this.vehicleService.getVehicleTypeList().subscribe(vehicleTypeList => {
      this.vehicleTypeList = vehicleTypeList;
    });
  }

  public editVehicle() {
    this.submit = true;
    console.log(this.vehicleEditForm);
    if (this.vehicleEditForm.valid) {
      this.vehicleService.updateVehicle(this.confirmVehicle.vehicleId, this.vehicleEditForm.value).subscribe(() => {
        this.route.navigateByUrl('/list');
      });
    }
  }

  public getVehicle(id: string) {
    return this.vehicleService.findById(id).subscribe(vehicle => {
      this.confirmVehicle = vehicle;
      console.log(vehicle);
      this.syncVehicle();
    });
  }

  private syncVehicle() {
    this.vehicleEditForm = new FormGroup({
      vehicleId: new FormControl(this.confirmVehicle.vehicleId),
      vehicleType: new FormControl(this.confirmVehicle.vehicleType, [Validators.required]),
      vehicleName: new FormControl(this.confirmVehicle.vehicleName, [Validators.required]),
      vehicleGoPosition: new FormControl(this.confirmVehicle.vehicleGoPosition, [Validators.required]),
      vehicleComePosition: new FormControl(this.confirmVehicle.vehicleComePosition, [Validators.required]),
      vehiclePhone: new FormControl(this.confirmVehicle.vehiclePhone, [Validators.required,
        Validators.pattern(/^((097)|(090)|(091))\d{7}$/)]),
      vehicleEmail: new FormControl(this.confirmVehicle.vehicleEmail, [Validators.required,
        Validators.email]),
      vehicleGoTime: new FormControl(this.confirmVehicle.vehicleGoTime, [Validators.required]),
      vehicleComeTime: new FormControl(this.confirmVehicle.vehicleComeTime, [Validators.required]),
      vehicleStatus: new FormControl(this.confirmVehicle.vehicleStatus)
    });
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.vehicleType === t2.vehicleType : t1 === t2;
  }
}
