import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilitiesListComponent} from './facilities/facilities-list/facilities-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {FacilitiesEditComponent} from './facilities/facilities-edit/facilities-edit.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {CustomerDeleteModalComponent} from './modal/customer-delete-modal/customer-delete-modal.component';
import {CustomerDetailModalComponent} from './modal/customer-detail-modal/customer-detail-modal.component';
import {FacilityDeleteModalComponent} from './modal/facility-delete-modal/facility-delete-modal.component';


// const routes: Routes = [];

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'facilities-list', component: FacilitiesListComponent},
  {path: 'facilities-edit', component: FacilitiesEditComponent},
  {path: 'facilities-delete-modal', component: FacilityDeleteModalComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-edit', component: CustomerEditComponent},
  {path: 'customer-delete-modal', component: CustomerDeleteModalComponent},
  {path: 'customer-detail-modal', component: CustomerDetailModalComponent},
  {path: 'contract-list', component: ContractListComponent},
  {path: 'contract-create', component: ContractCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
