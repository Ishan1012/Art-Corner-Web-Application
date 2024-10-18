import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoldersComponent } from './card-holders.component';

describe('CardHoldersComponent', () => {
  let component: CardHoldersComponent;
  let fixture: ComponentFixture<CardHoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHoldersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
