import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { GUEST_CREATION_EVENT, GUEST_LOGIN_URL, GUEST_REGISTER_URL } from '../shared/constants/urls';
import { IEventCreation } from '../shared/interfaces/IEventCreation';
import { IGuestLogin } from '../shared/interfaces/IGuestLogin';
import { Guest } from '../shared/models/guest';

const GUEST_KEY = 'Guest'; // We can modify this key when it's needed

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private UserGuest = new BehaviorSubject<Guest>(new Guest());

  public guestObservable:Observable<Guest>;


  constructor(private http:HttpClient , private toastrService:ToastrService) {
   this.guestObservable = this.UserGuest.asObservable();
  }


  // Here we define the Login methode by using an Interface (the IStudentLogin interface )

  login(guestLogin:IGuestLogin):Observable<Guest>{
    return this.http.post<Guest>(GUEST_LOGIN_URL ,guestLogin).pipe(


      tap({
        next:(guest)=>{
          this.UserGuest.next(guest);
          this.toastrService.success(
            `Bienvenu ${guest.name} !`);
            'Connexion Reussi'                   // message to send in case of succes
        },

        error:(errorresponse)=>{
          this.toastrService.error(errorresponse.error, 'Log Failed');  // message in failed case
        }


      })


    ); // to connect the backend with the front

  }
  registerGuest(guestLogin:IGuestLogin):Observable<Guest>{
    return this.http.post<Guest>(GUEST_REGISTER_URL ,guestLogin).pipe(

      tap({
        next: (guest ) =>{
          this.setGuestToLocalStorage(guest);
          this.UserGuest.next(guest);
          this.toastrService.success(
            `Bienvenu(e) ${guest.name}`,
            'Inscription reussi !!'
          )
        },
        error: (errorResponse)=>{
          this.toastrService.error(errorResponse.error ,
            'Inscription échouée !! ')
        }
      })
    )


    ; // to connect the backend with the front

  }
private setGuestToLocalStorage(guest:Guest){
  localStorage.setItem(GUEST_KEY, JSON.stringify(guest));

}

private getGuestFromLocalStorage():Guest{
  const guestJson = localStorage.getItem(GUEST_KEY);
  if(guestJson) return JSON.parse(guestJson) as Guest;
  return new Guest();
}




creationEvent(guestId,dataEvent:IEventCreation):Observable<Guest>{
    let objEventForCreation={
      guestID:guestId,
      event:dataEvent
    }
    return this.http.post<Guest>(GUEST_CREATION_EVENT ,objEventForCreation).pipe(


      tap({
        next:(guest)=>{
          console.log(guest);
          this.UserGuest.next(guest);
          this.toastrService.success(
            `Bienvenu ${guest.name} !`);
            'Connexion Reussi'                   // message to send in case of succes
        },

        error:(errorresponse)=>{
          this.toastrService.error(errorresponse.error, 'Log Failed');  // message in failed case
        }


      })


    );

}
}
