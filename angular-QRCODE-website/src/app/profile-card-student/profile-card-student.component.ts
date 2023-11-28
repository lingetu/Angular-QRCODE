import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card-student',
  templateUrl: './profile-card-student.component.html',
  styleUrls: ['./profile-card-student.component.css']
})
export class ProfileCardStudentComponent {
  public getScreenWidth: any;
  public getScreenHeight: any;
  public getQrCodeWidth: any;

  ProfileCardData = 
  [
    {
    key:'22004944',
    name: 'Lucas Bondon',
  },
]

  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
  }
  
}
