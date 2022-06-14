import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CaroselComponent } from './carosel/carosel.component';
import { HomeComponent } from './home/home.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { FacilitiesListComponent } from './facilities/facilities-list/facilities-list.component';
import { FacilitiesEditComponent } from './facilities/facilities-edit/facilities-edit.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { CustomerDeleteModalComponent } from './modal/customer-delete-modal/customer-delete-modal.component';
import { CustomerDetailModalComponent } from './modal/customer-detail-modal/customer-detail-modal.component';
import { FacilityDeleteModalComponent } from './modal/facility-delete-modal/facility-delete-modal.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CaroselComponent,
    HomeComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    FacilitiesListComponent,
    FacilitiesEditComponent,
    ContractCreateComponent,
    ContractListComponent,
    CustomerDeleteModalComponent,
    CustomerDetailModalComponent,
    FacilityDeleteModalComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
