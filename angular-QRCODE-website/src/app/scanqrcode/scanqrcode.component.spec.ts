import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanqrcodeComponent } from './scanqrcode.component';

describe('ScanqrcodeComponent', () => {
  let component: ScanqrcodeComponent;
  let fixture: ComponentFixture<ScanqrcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScanqrcodeComponent]
    });
    fixture = TestBed.createComponent(ScanqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
