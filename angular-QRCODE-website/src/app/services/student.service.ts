import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { STUDENT_LOGIN_URL } from '../shared/constants/urls';
import { IStudentLogin } from '../shared/interfaces/IStudentLogin';
import { Student } from '../shared/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private UserStudent = new BehaviorSubject<Student>(new Student());

  public studentObservable:Observable<Student>;


  constructor(private http:HttpClient , private toastrService:ToastrService) { 
   this.studentObservable = this.UserStudent.asObservable();


  }


  // Here we define the Login methode by using an Interface (the IStudentLogin interface )

  login(studentLogin:IStudentLogin):Observable<Student>{
       console.log("Yess!!")
     
    return this.http.post<Student>(STUDENT_LOGIN_URL ,studentLogin).pipe( 
        
      tap({
        next:(student)=>{
          this.UserStudent.next(student);
          this.toastrService.success(
            `Bienvenu ${student.name} !`);
            'Connexion Reussi'                   // message to send in case of succes 


        },

        error:(errorresponse)=>{
          this.toastrService.error(errorresponse.error, 'Log Failed');  // message in failed case 


        }
        

      })
         

    ); // to connect the backend with the front 

  }
}
