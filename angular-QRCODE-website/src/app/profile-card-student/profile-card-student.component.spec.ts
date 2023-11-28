import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardStudentComponent } from './profile-card-student.component';

describe('ProfileCardStudentComponent', () => {
  let component: ProfileCardStudentComponent;
  let fixture: ComponentFixture<ProfileCardStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCardStudentComponent]
    });
    fixture = TestBed.createComponent(ProfileCardStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
