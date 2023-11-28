import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
 
  rightpanelactive(elem: HTMLElement) {
    elem.className = 'container right-panel-active';
   
  }
  leftpanelactive(elem: HTMLElement) {
    elem.className = 'container';
  }

  DataForm: FormGroup = new FormGroup({});
  payLoad: any;

 PreviewData() 
    {
         this.payLoad = JSON.stringify(this.DataForm.value);
         console.log(this.payLoad);
    }

  
}
