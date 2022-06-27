import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VehicleType} from "../model/vehicle-type";
import {VehicleService} from "../service/vehicle.service";
import {Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/storage";
import {formatDate} from "@angular/common";
import {finalize} from "rxjs/operators";
import {Vehicle} from "../model/vehicle";

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {
  vehicleCreateForm: FormGroup;
  vehicleTypeList: VehicleType[] = [];
  submit = false;
  url: string;
  private selectedImage: any;

  constructor(private route: Router,
              private vehicleService: VehicleService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
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
      vehicleImage: new FormControl(''),
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

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }

  save() {
    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          console.log(this.url);
          this.vehicleCreateForm.patchValue({vehicleImage: this.url});
          console.log(this.vehicleCreateForm);
          this.vehicleService.createVehicle(this.vehicleCreateForm.value).subscribe(() => {
            this.route.navigateByUrl('/list');
          })
        });
      })
    ).subscribe();
  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }
}
