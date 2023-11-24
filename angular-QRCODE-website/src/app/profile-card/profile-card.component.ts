import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {

  public getScreenWidth: any;
  public getScreenHeight: any;
  public getQrCodeWidth: any;

  ProfileCardData = 
  [
    {
    key:'22004944',
    name: 'Lucas Bondon',
    job: 'Développeur Web',
    email: 'luc.bondon@gmail.com',
    phone: '06 89 95 97 42',
    adress: '2 rue de la gare 67120 Dachstein',
    company: 'Sopra Steria',
  },
]

  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
  }

}
