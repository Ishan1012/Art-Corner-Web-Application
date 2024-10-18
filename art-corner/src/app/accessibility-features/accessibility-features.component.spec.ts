import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityFeaturesComponent } from './accessibility-features.component';

describe('AccessibilityFeaturesComponent', () => {
  let component: AccessibilityFeaturesComponent;
  let fixture: ComponentFixture<AccessibilityFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
