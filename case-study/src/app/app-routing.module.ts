import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FacilitiesListComponent} from './facilities/facilities-list/facilities-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {FacilitiesEditComponent} from './facilities/facilities-edit/facilities-edit.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {FacilityDeleteModalComponent} from './modal/facility-delete-modal/facility-delete-modal.component';


// const routes: Routes = [];

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {
    path: 'facilities',
    loadChildren: () => import('./facilities/facilities.module').then(module => module.FacilitiesModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
