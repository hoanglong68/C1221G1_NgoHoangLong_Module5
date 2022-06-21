import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VehicleParkListComponent} from './vehicle-park-list/vehicle-park-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { VehicleParkDeleteModalComponent } from './vehicle-park-delete-modal/vehicle-park-delete-modal.component';
import { VehicleParkEditComponent } from './vehicle-park-edit/vehicle-park-edit.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleParkListComponent,
    VehicleParkDeleteModalComponent,
    VehicleParkEditComponent,
    VehicleCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
