import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { StudentService } from "../services/student.service";
import { Guest } from '../shared/models/guest';
import { Student } from "../shared/models/student";

@Component({
  selector: 'app-profile-card-guest',
  templateUrl: './profile-card-guest.component.html',
  styleUrls: ['./profile-card-guest.component.css']
})
export class ProfileCardGuestComponent implements OnInit {

  public getScreenWidth: any;
  public getScreenHeight: any;
  public getQrCodeWidth: any;
  student!:Student;
  guest!: Guest;

  constructor(studentService :StudentService, guestService : GuestService){
    
    studentService.studentObservable.subscribe((newStudent)=>{
      this.student = newStudent;

    })
    guestService.guestObservable.subscribe((newGuest)=>{
      this.guest = newGuest;

    })

  }

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
