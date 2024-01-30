import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { StudentService } from "../services/student.service";
import { Guest } from '../shared/models/guest';
import { Student } from "../shared/models/student";
import { IEventCreation } from '../shared/interfaces/IEventCreation';

@Component({
  selector: 'app-profile-card-guest',
  templateUrl: './profile-card-guest.component.html',
  styleUrls: ['./profile-card-guest.component.css']
})
export class ProfileCardGuestComponent implements OnInit {

  public getScreenWidth: any;
  public getScreenHeight: any;
  public getQrCodeWidth: any;
  guest!: Guest;
  events!: IEventCreation[];

  constructor(private guestService : GuestService){




  }



  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;

      this.guestService.guestObservable.subscribe((newGuest)=>{
        this.guest = newGuest;

      })

      if(this.guest.name == undefined){
        //Rediriger vers la page de connexion
        window.location.href = "/formLogin";
      }
      this.events = this.guest.event;
      console.log(this.events);


  }


}
