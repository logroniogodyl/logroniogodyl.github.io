import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoveComponent } from './dove.component';

describe('DoveComponent', () => {
  let component: DoveComponent;
  let fixture: ComponentFixture<DoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoveComponent]
    });
    fixture = TestBed.createComponent(DoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
