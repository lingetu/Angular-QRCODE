import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQrcodeEtudiantComponent } from './form-qrcode-etudiant.component';

describe('FormQrcodeEtudiantComponent', () => {
  let component: FormQrcodeEtudiantComponent;
  let fixture: ComponentFixture<FormQrcodeEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormQrcodeEtudiantComponent]
    });
    fixture = TestBed.createComponent(FormQrcodeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
