import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeComponentComponent } from './qr-code-component.component';

describe('QrCodeComponentComponent', () => {
  let component: QrCodeComponentComponent;
  let fixture: ComponentFixture<QrCodeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrCodeComponentComponent]
    });
    fixture = TestBed.createComponent(QrCodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
