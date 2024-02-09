import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeProfileGuestComponent } from './edite-profile-guest.component';

describe('EditeProfileGuestComponent', () => {
  let component: EditeProfileGuestComponent;
  let fixture: ComponentFixture<EditeProfileGuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeProfileGuestComponent]
    });
    fixture = TestBed.createComponent(EditeProfileGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
