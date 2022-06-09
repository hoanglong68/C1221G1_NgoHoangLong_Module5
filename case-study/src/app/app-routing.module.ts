import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilitiesListComponent} from './facilities/facilities-list/facilities-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';


// const routes: Routes = [];

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'facilities-list', component: FacilitiesListComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'contract-list', component: ContractListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
