import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleParkEditComponent } from './vehicle-park-edit.component';

describe('VehicleParkEditComponent', () => {
  let component: VehicleParkEditComponent;
  let fixture: ComponentFixture<VehicleParkEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleParkEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleParkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
