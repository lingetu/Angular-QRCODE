import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { GuestService } from '../services/guest.service';
import { Guest } from '../shared/models/guest';

@Component({
  selector: 'app-edite-profile-guest',
  templateUrl: './edite-profile-guest.component.html',
  styleUrls: ['./edite-profile-guest.component.css']
})
export class EditeProfileGuestComponent  implements OnInit   {



  DataForm: FormGroup = new FormGroup({});
  faUser = faUser;
  payLoad: any;


 PreviewData()
    {
         this.payLoad = JSON.stringify(this.DataForm.value);
         console.log(this.payLoad);
    }

    DataGuestEditeForm !: FormGroup;
    isSubmitted = false;
    returnUrlGuest = '/homeGuest';   // returnUrl = '/home';
    guest!: Guest;


    constructor(private formBuilder: FormBuilder ,
      private guestService :GuestService ,
      private activatedRoute : ActivatedRoute,
      private router: Router) {}


      ngOnInit(): void{
        this.guestService.guestObservable.subscribe((newGuest)=>{
          this.guest = newGuest;
          console.log(this.guest);

        })
        if(this.guest.name == undefined){
          //Rediriger vers la page de connexion
          window.location.href = "/formLogin";
        }





        this.DataGuestEditeForm = this.formBuilder.group({

          name :[''],
          company :['',],
          adresse:[''],
          email:['', Validators.email],
          passeword : this.guest.password,
          confirmPasseword :['']
        });

        this.DataGuestEditeForm.patchValue({
          name: this.guest.name,
          email: this.guest.email,
          adresse: this.guest.adresse,
          company: this.guest.company,
          passeword : this.guest.password,


        });

      }



get fcEditeGuest (){
  return this.DataGuestEditeForm.controls;
}

//Guest registration methode

submitEditeGuest()
{
  this.isSubmitted = true;

    if(this.DataGuestEditeForm.invalid) {

      // Log des erreurs spécifiques
      if (this.fcEditeGuest['name'].errors) {
        console.log('Erreur dans le champ "name" :', this.fcEditeGuest['name'].errors);
    }
    if (this.fcEditeGuest['email'].errors) {
        console.log('Erreur dans le champ "email" :', this.fcEditeGuest['email'].errors);
    }
   return;
  }

  const fv = this.DataGuestEditeForm.value;

  const guestEdite: any = {
    id: this.guest.id,
    name : fv.name,
    company : fv.company,
    adresse: fv.adresse,
    email : fv.email,

  };

  console.log(guestEdite);
  this.guestService
  .saveProfileGuest(
    guestEdite
  )
  .subscribe(() => {
    this.router.navigate([this.returnUrlGuest]);
  });
}

  // this.guestService.saveProfileGuest(guestEdite).subscribe(_ =>{
  //   this.router.navigateByUrl(this.returnUrl);
  // });











}











