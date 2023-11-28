import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-qrcode-etudiant',
  templateUrl: './form-qrcode-etudiant.component.html',
  styleUrls: ['./form-qrcode-etudiant.component.css'],
})
export class FormQrcodeEtudiantComponent {
  payLoad: any;
  formQRCODE: any;
  DataForm: FormGroup = new FormGroup({});

  constructor() {
    this.formQRCODE = [
      {
        name: 'Numéro étudiant',
        placeholder: '123456789',
        type: 'number',
      },
      {
        name: 'Mot de Passe',
        placeholder: '********',
        type: 'password',
      },
    ];

    this.DataForm = this.generateFormControls(this.formQRCODE);
  }

  generateFormControls(formQRCODE: any) {
    let tempGroup: FormGroup = new FormGroup({});
    formQRCODE.forEach((i) => {
      tempGroup.addControl(i.name, new FormControl(''));
    });
    return tempGroup;
  }

  PreviewData() {
    this.payLoad = JSON.stringify(this.DataForm.value);
  }
}
