import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleParkDeleteModalComponent } from './vehicle-park-delete-modal.component';

describe('VehicleParkDeleteModalComponent', () => {
  let component: VehicleParkDeleteModalComponent;
  let fixture: ComponentFixture<VehicleParkDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleParkDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleParkDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
