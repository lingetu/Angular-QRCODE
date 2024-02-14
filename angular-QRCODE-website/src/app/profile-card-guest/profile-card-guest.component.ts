
import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { Guest } from '../shared/models/guest';
import { IEventCreation, IPresentList,IEvent } from '../shared/interfaces/IEventCreation';
import { faQrcode,faTimes,faList,faDownload } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgbActiveModal,NgbModalRef,NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile-card-guest',
  templateUrl: './profile-card-guest.component.html',
  styleUrls: ['./profile-card-guest.component.css']
})
export class ProfileCardGuestComponent implements OnInit {


  modalRef: NgbModalRef;
  public getScreenWidth: any;
  public getScreenHeight: any;
  public getQrCodeWidth: any;
  guest!: Guest;
  events!: IEvent[];
  eventToDelete!: IEvent;
  guestidSTring!: string;


  faQrcode = faQrcode;
  faTimes = faTimes;
  faList=faList;
  faDownload = faDownload;


  filteredEvents: IEvent[] = [];
  presentList: IPresentList[] = [];




  filter : "Tout" | "Passé" | "A venir" | "Aujourdhui"= "Tout";




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
      // this.guestidSTring = this.guest.id.toString();
      // console.log(this.guestidSTring);
    })
}



  deleteEvent(event:IEvent){
    this.closeModal();
    {
    this.guestService.deleteEvent(event._id,this.guest).subscribe((newGuest) => {
    console.log(newGuest);
    });

    this.guestService.getGuestLive(this.guest.id).subscribe((newGuest) => {
      console.log(newGuest);
      this.guest = newGuest;
      this.events = this.guest.event;
    });

  }

  }
  generateQRcode(event:IEvent){ {
    console.log(event);
    console.log(event._id);
    console.log(this.guest.id);

  }

  }

  downloadFile(IPresentList:IPresentList[])
  {

    const file=this.toCSV(this.presentList);
    console.log(this.toCSV(this.presentList));
    const newBlob = new Blob([file], { type: "text/csv" });
const data = window.URL.createObjectURL(newBlob);
const link = document.createElement("a");
link.href = data;
link.download = ("eventLIstpresent"); //set a name for file
link.click();

  }







  constructor(private guestService : GuestService, private modalService:NgbModal){ }

   toCSV(json) {
    json = Object.values(json);
    var csv = "";
    var keys = (json[0] && Object.keys(json[0])) || [];
    csv += keys.join(',') + '\n';
    for (var line of json) {
      csv += keys.map(key => line[key]).join(',') + '\n';
    }
    return csv;
  }







   openModal(template, event: IEvent) {
    this.presentList = event.presentList;
    this.modalService.open(template,{
      windowClass: 'modal-dialog-centered',
      centered: true, // This centers the modal vertically

    });
  }

  openModalDelete(template,event:IEvent) {
    this.modalService.open(template,{
      windowClass: 'modal-dialog-centered',
      centered: true, // This centers the modal vertically
    });
    this.eventToDelete = event;
  }

  cancelDelete() {
    this.eventToDelete = null;
    this.modalService.dismissAll();

  }

  closeModal() {
    this.modalService.dismissAll();
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
