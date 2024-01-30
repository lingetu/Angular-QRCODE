import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code-component',
  templateUrl: './qr-code-component.component.html',
  styleUrls: ['./qr-code-component.component.css']
})
export class QrCodeComponentComponent {
QrCodeData = 'https://lucasbondon-website.web.app/';

public getScreenWidth: any;
public getScreenHeight: any;
public getQrCodeWidth :any;

  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
      this.getQrCodeWidth = this.getScreenWidth*0.2;
  }


}
