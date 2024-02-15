import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-qr-code-component',
  templateUrl: './qr-code-component.component.html',
  styleUrls: ['./qr-code-component.component.css']
})
export class QrCodeComponentComponent {
  idcard=0;
 QrCodeDataId = 'localhost:4200/idcard?id=';
 @Input() id: string='';
  QRcodeLien: string;

  QrCodeDataEvent = 'localhost:4200/scanqrcode?';
@Input() eventId: string= 'idEvent=';
@Input() guestId: string= 'idGuest=';



public getScreenWidth: any;
public getScreenHeight: any;
public getQrCodeWidth :any;

  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
      this.getQrCodeWidth = this.getScreenWidth*0.2;

      if (this.id=='' || this.id==undefined) {
        this.QrCodeDataEvent = this.QrCodeDataEvent + 'idEvent=' + this.eventId + '&idGuest=' + this.guestId;


       }
       else {

        this.idcard=1;

        this.QRcodeLien = this.QrCodeDataId + this.id;
         }

  }


}
