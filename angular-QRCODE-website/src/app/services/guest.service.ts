import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { GUEST_LOGIN_URL, GUEST_REGISTER_URL } from '../shared/constants/urls';
import { IGuestLogin } from '../shared/interfaces/IGuestLogin';
import { IGuestRegister } from '../shared/interfaces/IGuestRegister';
import { Guest } from '../shared/models/guest';

const GUEST_KEY = 'Guest';

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
          //this.setGuestToLocalStorage(Guest)   // to save the session 
          console.log(guest[0])
          this.UserGuest.next(guest[0]);
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

  private setGuestToLocalStorage(guest:Guest){
    localStorage.setItem(GUEST_KEY, JSON.stringify(guest));
  
  }
  
  private getGuestFromLocalStorage():Guest{
    const guestJson = localStorage.getItem(GUEST_KEY);
    if(guestJson) return JSON.parse(guestJson) as Guest;
    return new Guest();
  }

  
register(guestRegister:IGuestRegister): Observable<Guest>{
  console.log("fonction register");
 return this.http.post<Guest>(GUEST_REGISTER_URL,guestRegister).pipe(
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
}









}



