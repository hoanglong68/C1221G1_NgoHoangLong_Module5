import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleParkListComponent } from './vehicle-park-list.component';

describe('RealEstateTransComponent', () => {
  let component: VehicleParkListComponent;
  let fixture: ComponentFixture<VehicleParkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleParkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleParkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
