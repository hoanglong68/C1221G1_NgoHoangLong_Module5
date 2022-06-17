import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {FacilitiesEditComponent} from './facilities-edit/facilities-edit.component';
import {FacilityDeleteModalComponent} from './facility-delete-modal/facility-delete-modal.component';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FacilitiesListComponent,
    FacilitiesEditComponent,
    FacilityDeleteModalComponent,
    FacilitiesCreateComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacilitiesModule { }
