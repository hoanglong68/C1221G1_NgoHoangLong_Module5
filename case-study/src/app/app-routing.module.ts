import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home/home.component';


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
