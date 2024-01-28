import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestService } from '../services/guest.service';
import { StudentService } from '../services/student.service';
import { IStudentRegister } from '../shared/interfaces/IStudentRegister';
import { PasswordsMatchValidator } from '../shared/validators/passwords_match_validator';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent  {
 
  rightpanelactive(elem: HTMLElement) {
    elem.className = 'container right-panel-active';
   
  }
  leftpanelactive(elem: HTMLElement) {
    elem.className = 'container';
  }

  DataForm: FormGroup = new FormGroup({});
  payLoad: any;

 PreviewData() 
    {
         this.payLoad = JSON.stringify(this.DataForm.value);
         console.log(this.payLoad);
    }

  
    DataStudentRegisterForm !: FormGroup;
    DataGuestRegisterForm !: FormGroup;
    isSubmitted = false;
    returnUrl = '';   // returnUrl = '/home';

    constructor(private formBuilder: FormBuilder ,

      private studentService :StudentService ,
      private guestService :GuestService ,
      private activatedRoute : ActivatedRoute,
      private router: Router) {}

      ngOnInit(): void{
        this.DataStudentRegisterForm = this.formBuilder.group({
          studentNumber:['', [Validators.required , Validators.minLength(8)]],
          name:['', [Validators.required,Validators.minLength(3)]],
          password:['', Validators.required],
          confirmPassword:['',Validators.required]
        },
        {
          validators: PasswordsMatchValidator('password', 'confirmPassword')
        });

        this.DataGuestRegisterForm = this.formBuilder.group({

          name :['',[ Validators.required , Validators.minLength(3)]],
          email:['', [Validators.required ,Validators.email]],
          password:['', Validators.required],
          confirmPassword:['',Validators.required]
        },{

          validators: PasswordsMatchValidator('password', 'confirmPassword')
        ,

        });
    
        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
      }    
 


// This is added by Falilou for testing !!!!
get fcStudent (){
  return this.DataStudentRegisterForm.controls;
}

submitStudent(){

 
  this.isSubmitted = true;

  //if(this.DataStudentRegisterForm.invalid) return;
  
  const fv = this.DataStudentRegisterForm.value;
  console.log("ok");
  const student : IStudentRegister ={
    name : fv.name,
    studentNumber : fv.studentNumber,
    password : fv.password,
    confirmPassword : fv.confirmPassword
  };
  console.log(student);

  this.studentService.register(student).subscribe(_ =>{
    this.router.navigateByUrl(this.returnUrl);
  });
  


}


}

