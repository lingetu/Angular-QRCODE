import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcardComponent } from './idcard.component';

describe('IdcardComponent', () => {
  let component: IdcardComponent;
  let fixture: ComponentFixture<IdcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdcardComponent]
    });
    fixture = TestBed.createComponent(IdcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
