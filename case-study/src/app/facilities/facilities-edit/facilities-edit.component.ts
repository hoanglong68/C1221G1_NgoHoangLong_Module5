import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/Facility';
import {FacilitiesService} from '../../service/facilities.service';
import {FacilityType} from '../../model/FacilityType';
import {RentType} from '../../model/RentType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-facilities-edit',
  templateUrl: './facilities-edit.component.html',
  styleUrls: ['./facilities-edit.component.css']
})
export class FacilitiesEditComponent implements OnInit {
  facilityEditForm: FormGroup;
  confirmFacility: Facility;
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  id?: string;
  submit = false;

  constructor(private facilitiesService: FacilitiesService, private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getFacilityTypeList();
    this.getRentTypeList();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getFacility(this.id);
      console.log(this.confirmFacility.id);
    });
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

  public syncFacility() {
    this.facilityEditForm = new FormGroup({
      id: new FormControl(this.confirmFacility.id, [Validators.required]),
      facilityName: new FormControl(this.confirmFacility.facilityName, [Validators.required]),
      facilityArea: new FormControl(this.confirmFacility.facilityArea, [Validators.required]),
      facilityPrice: new FormControl(this.confirmFacility.facilityPrice, [Validators.required]),
      facilityMaxOfPeople: new FormControl(this.confirmFacility.facilityMaxOfPeople, [Validators.required]),
      facilityRentType: new FormControl(this.confirmFacility.facilityRentType, [Validators.required]),
      facilityType: new FormControl(this.confirmFacility.facilityType, [Validators.required]),
      facilityStandardRoom: new FormControl(this.confirmFacility.facilityStandardRoom, [Validators.required]),
      facilityDescriptionOtherConvenience: new FormControl(this.confirmFacility.facilityDescriptionOtherConvenience, [Validators.required]),
      facilityPoolArea: new FormControl(this.confirmFacility.facilityPoolArea, [Validators.required]),
      facilityFloors: new FormControl(this.confirmFacility.facilityFloors, [Validators.required]),
    });
  }

  public getFacility(id: string) {
    return this.facilitiesService.findById(id).subscribe(facility => {
      this.confirmFacility = facility;
      this.syncFacility();
    });
  }

  public editFacility() {
    this.submit = true;
    console.log(this.facilityEditForm);
    if (this.facilityEditForm.valid) {
      this.facilitiesService.updateFacility(this.confirmFacility.id, this.facilityEditForm.value).subscribe(() => {
        this.route.navigateByUrl('/facilities/list');
      });
    }
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.customerType === t2.customerType : t1 === t2;
  }
}
