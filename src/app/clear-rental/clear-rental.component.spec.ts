import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearRentalComponent } from './clear-rental.component';

describe('ClearRentalComponent', () => {
  let component: ClearRentalComponent;
  let fixture: ComponentFixture<ClearRentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearRentalComponent]
    });
    fixture = TestBed.createComponent(ClearRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
