import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-qrcode-company',
  templateUrl: './form-qrcode-company.component.html',
  styleUrls: ['./form-qrcode-company.component.css']
})
export class FormQrcodeCompanyComponent {

  
 
  formQRCODE: any;
  DataForm: FormGroup = new FormGroup({});
  payLoad: any;

  constructor()
  {
    this.formQRCODE = 
    [
    {
      name:'Numéro de téléphone',
      placeholder:'+33 6 00 00 00 00',
      type:'tel',
    },
    {
      name:'Adresse',
      placeholder:'1 rue de la paix',
      type:'text',
    },
    {
      name:'Entreprise',
      placeholder:'Google',
      type:'text',
      
    },
    {
      name:'Poste',
      placeholder:'Développeur',
      type:'text',
    },
    {
      name:'Photo',
      type:'file',
    }
      
  ]

    this.DataForm = this.generateFormControls(this.formQRCODE);
 }


    generateFormControls(formQRCODE: any)
    {
        let tempGroup: FormGroup = new FormGroup({});
        formQRCODE.forEach(i=>{
            tempGroup.addControl(i.name, new FormControl(''))
        })
        return tempGroup;
    }

    PreviewData() 
    {
         this.payLoad = JSON.stringify(this.DataForm.value);
    }
}

