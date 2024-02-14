import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-qr-code-component',
  templateUrl: './qr-code-component.component.html',
  styleUrls: ['./qr-code-component.component.css']
})
export class QrCodeComponentComponent {
 QrCodeData = 'localhost:4200/idcard?id=';
 @Input() id: string;
  QRcodeLien: string;



public getScreenWidth: any;
public getScreenHeight: any;
public getQrCodeWidth :any;

  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
      this.getQrCodeWidth = this.getScreenWidth*0.2;

      if (this.id) {
        this.QRcodeLien = this.QrCodeData + this.id;
        console.log(this.QRcodeLien);
       }
  }


}
