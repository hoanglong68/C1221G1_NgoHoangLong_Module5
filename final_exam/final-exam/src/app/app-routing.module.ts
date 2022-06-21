import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VehicleParkListComponent} from "./vehicle-park-list/vehicle-park-list.component";
import {VehicleParkEditComponent} from "./vehicle-park-edit/vehicle-park-edit.component";
import {VehicleCreateComponent} from "./vehicle-create/vehicle-create.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: VehicleParkListComponent},
  {path: 'create', component: VehicleCreateComponent},
  {path: 'edit/:id', component: VehicleParkEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
