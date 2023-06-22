import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlopBusterComponent } from './flop-buster.component';

describe('FlopBusterComponent', () => {
  let component: FlopBusterComponent;
  let fixture: ComponentFixture<FlopBusterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlopBusterComponent]
    });
    fixture = TestBed.createComponent(FlopBusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
