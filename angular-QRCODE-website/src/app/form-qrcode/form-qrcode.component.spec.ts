import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQrcodeComponent } from './form-qrcode.component';

describe('FormQrcodeComponent', () => {
  let component: FormQrcodeComponent;
  let fixture: ComponentFixture<FormQrcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormQrcodeComponent]
    });
    fixture = TestBed.createComponent(FormQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
