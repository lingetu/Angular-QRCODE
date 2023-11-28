import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardGuestComponent } from './profile-card-guest.component';

describe('ProfileCardGuestComponent', () => {
  let component: ProfileCardGuestComponent;
  let fixture: ComponentFixture<ProfileCardGuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCardGuestComponent]
    });
    fixture = TestBed.createComponent(ProfileCardGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
