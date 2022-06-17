import {Component, OnInit} from '@angular/core';
import {FacilitiesService} from '../../service/facilities.service';
import {FacilityType} from '../../model/FacilityType';
import {RentType} from '../../model/RentType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  facilityForm: FormGroup;
  submit = false;

  constructor(private facilitiesService: FacilitiesService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      facilityName: new FormControl('', [Validators.required]),
      facilityArea: new FormControl('', [Validators.required]),
      facilityPrice: new FormControl('', [Validators.required]),
      facilityMaxOfPeople: new FormControl('', [Validators.required]),
      facilityRentType: new FormControl('', [Validators.required]),
      facilityType: new FormControl('', [Validators.required]),
      facilityStandardRoom: new FormControl('', [Validators.required]),
      facilityDescriptionOtherConvenience: new FormControl('', [Validators.required]),
      facilityPoolArea: new FormControl('', [Validators.required]),
      facilityFloors: new FormControl('', [Validators.required]),
    });
    this.getFacilityTypeList();
    this.getRentTypeList();
  }

  public getFacilityTypeList() {
    return this.facilitiesService.getFacilityTypeList().subscribe(facilityTypeList => {
      this.facilityTypeList = facilityTypeList;
    });
  }

  public getRentTypeList() {
    return this.facilitiesService.getRentTypeList().subscribe(rentTypeList => {
      this.rentTypeList = rentTypeList;
    });
  }

  public createFacility() {
    this.submit = true;
    console.log(this.facilityForm);
    if (this.facilityForm.valid) {
      this.facilitiesService.saveFacility(this.facilityForm.value).subscribe(next => {
          this.route.navigateByUrl('/facilities/list');
        }, error => {
        }, () => {
        }
      );
    }
  }
}
