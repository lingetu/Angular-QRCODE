import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-qrcode',
  templateUrl: './form-qrcode.component.html',
  styleUrls: ['./form-qrcode.component.css']
})
export class FormQrcodeComponent {

  
  payLoad: any;
  formQRCODE: any;
  DataForm: FormGroup = new FormGroup({});

  constructor()
  {
    this.formQRCODE = 
    [
    {
      name:'Nom Prénom',
      placeholder:'john doe',
      type:'text'
    },
    {
      name:'Adresse email',
      placeholder:'example@gmail.com',
      type:'email'
    },
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

