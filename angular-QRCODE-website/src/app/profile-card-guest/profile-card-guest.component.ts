import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { Guest } from '../shared/models/guest';
import { IEventCreation } from '../shared/interfaces/IEventCreation';
import { faQrcode,faTimes,faList } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile-card-guest',
  templateUrl: './profile-card-guest.component.html',
  styleUrls: ['./profile-card-guest.component.css']
})
export class ProfileCardGuestComponent implements OnInit {


  modalRef: BsModalRef;
  public getScreenWidth: any;
  public getScreenHeight: any;
  public getQrCodeWidth: any;
  guest!: Guest;
  events!: IEventCreation[];
  faQrcode = faQrcode;
  faTimes = faTimes;
  faList=faList;
  filteredEvents: IEventCreation[] = [];

  filter : "Tout" | "Passé" | "A venir" | "Aujourdhui"= "Tout";

  constructor(private guestService : GuestService,private modalService: NgbModal){ }







   openModal(template) {
    this.modalService.open(template);
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

      this.guestService.getGuestLive(this.guest.id).subscribe((newGuest)=>{
        this.guest = newGuest;
        this.events = this.guest.event;
      })
      this.events = this.guest.event;




  }


  get event() {

    const currentDateWithoutTime = new Date().toISOString().split('T')[0];

    if (this.filter === 'Tout') {
      this.filteredEvents = this.events;
    } else if (this.filter === "Passé") {
      this.filteredEvents = this.events.filter(event => new Date(event.date) < new Date(currentDateWithoutTime));
    } else if (this.filter === "A venir") {
      this.filteredEvents = this.events.filter(event => new Date(event.date) > new Date(currentDateWithoutTime));
    } else if (this.filter === "Aujourdhui") {
      this.filteredEvents = this.events.filter(event => new Date(event.date) >= new Date(currentDateWithoutTime) && new Date(event.date) < new Date(currentDateWithoutTime + 'T23:59:59'));
    }

    return this.filteredEvents;
  }


}
