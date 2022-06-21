import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VehicleType} from "../model/vehicle-type";
import {VehicleService} from "../service/vehicle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {
  vehicleCreateForm: FormGroup;
  vehicleTypeList: VehicleType[] = [];
  submit = false;

  constructor(private route: Router,
              private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.getVehicleTypeList();
    this.vehicleCreateForm = new FormGroup({
      vehicleId: new FormControl(''),
      vehicleType: new FormControl('', [Validators.required]),
      vehicleName: new FormControl('', [Validators.required]),
      vehicleGoPosition: new FormControl('', [Validators.required]),
      vehicleComePosition: new FormControl('', [Validators.required]),
      vehiclePhone: new FormControl('', [Validators.required,
        Validators.pattern(/^((097)|(090)|(091))\d{7}$/)]),
      vehicleEmail: new FormControl('', [Validators.required,
        Validators.email]),
      vehicleGoTime: new FormControl('', [Validators.required]),
      vehicleComeTime: new FormControl('', [Validators.required]),
      vehicleStatus: new FormControl(1)
    });
  }

  public getVehicleTypeList() {
    return this.vehicleService.getVehicleTypeList().subscribe(vehicleTypeList => {
      this.vehicleTypeList = vehicleTypeList;
    });
  }

  public createVehicle() {
    this.submit = true;
    console.log(this.vehicleCreateForm);
    if (this.vehicleCreateForm.valid) {
      this.vehicleService.createVehicle(this.vehicleCreateForm.value).subscribe(() => {
        this.route.navigateByUrl('/list');
      });
    }
  }
}
