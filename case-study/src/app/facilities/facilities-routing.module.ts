import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {FacilitiesEditComponent} from './facilities-edit/facilities-edit.component';
import {FacilityDeleteModalComponent} from './facility-delete-modal/facility-delete-modal.component';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';


const routes: Routes = [
  {path: 'list', component: FacilitiesListComponent},
  {path: 'create', component: FacilitiesCreateComponent},
  {path: 'edit/:id', component: FacilitiesEditComponent},
  {path: 'delete', component: FacilityDeleteModalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule {
}
