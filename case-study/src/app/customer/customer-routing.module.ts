import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerDeleteModalComponent} from './customer-delete-modal/customer-delete-modal.component';
import {CustomerDetailModalComponent} from './customer-detail-modal/customer-detail-modal.component';


const routes: Routes = [
  {path: 'list', component: CustomerListComponent},
  {path: 'create', component: CustomerCreateComponent},
  {path: 'edit/:customerId', component: CustomerEditComponent},
  {path: 'delete', component: CustomerDeleteModalComponent},
  {path: 'detail', component: CustomerDetailModalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
