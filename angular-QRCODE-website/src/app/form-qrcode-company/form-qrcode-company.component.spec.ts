import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQrcodeCompanyComponent } from './form-qrcode-company.component';

describe('FormQrcodeCompanyComponent', () => {
  let component: FormQrcodeCompanyComponent;
  let fixture: ComponentFixture<FormQrcodeCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormQrcodeCompanyComponent]
    });
    fixture = TestBed.createComponent(FormQrcodeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
