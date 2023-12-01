import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { GUEST_LOGIN_URL, GUEST_REGISTER_URL } from '../shared/constants/urls';
import { IGuestLogin } from '../shared/interfaces/IGuestLogin';
import { Guest } from '../shared/models/guest';

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
        next:(Guest)=>{
          this.UserGuest.next(Guest);
          this.toastrService.success(
            `Bienvenu ${Guest.name} !`);
            'Connexion Reussi'                   // message to send in case of succes 
        },

        error:(errorresponse)=>{
          this.toastrService.error(errorresponse.error, 'Log Failed');  // message in failed case 
        }
        

      })
         

    ); // to connect the backend with the front 

  }
  register(guestLogin:IGuestLogin):Observable<Guest>{
    return this.http.post<Guest>(GUEST_REGISTER_URL ,guestLogin).pipe( 
        
      // tap({
      //   next:(student)=>{
      //     this.UserStudent.next(student);
      //     this.toastrService.success(
      //       `Bienvenu ${student.name} !`);
      //       'Connexion Reussi'                   // message to send in case of succes 
      //   },

      //   error:(errorresponse)=>{
      //     this.toastrService.error(errorresponse.error, 'Log Failed');  // message in failed case 
      //   }
        

      // })
         

    ); // to connect the backend with the front 

  }

}
