import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { GuestService } from '../services/guest.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  rightpanelactive(elem: HTMLElement) {
    elem.className = 'container right-panel-active';
   
  }
  leftpanelactive(elem: HTMLElement) {
    elem.className = 'container';
  }

  //DataForm: FormGroup = new FormGroup({});

  //modified by Falilou 

  DataFormStudentLogin !: FormGroup;
  DataFormGuestLogin !: FormGroup;
  isSubmitted = false;
  returnUrl = '/home';

  payLoad: any;
  
  constructor(private formBuilder: FormBuilder ,

     private studentService :StudentService ,
     private guestService :GuestService ,
     private activatedRoute : ActivatedRoute,
     private router: Router) {}


  ngOnInit(): void{
    this.DataFormStudentLogin = this.formBuilder.group({
      number:['', Validators.required],
      password:['', Validators.required]
    });
    this.DataFormGuestLogin = this.formBuilder.group({
      mail:['', Validators.required],
      password:['', Validators.required]
    });

    this.returnUrl = this.returnUrl
  }





    
get fcStudent (){
  return this.DataFormStudentLogin.controls;
}
get fcGuest (){
  return this.DataFormGuestLogin.controls;
}

submitGuestLogin(){
  this.isSubmitted = true;
  if(this.DataFormGuestLogin.invalid) {
    return};

  /*alert(`number:${this.fc['number'].value}   
  ,
  password :${this.fc['password'].value}`) */     // to catch the email and the password submitted 
   
   // For the student login page

  this.guestService.login({    
    mail:this.fcGuest['mail'].value,
    password: this.fcGuest['password'].value,
  }).subscribe(()=>{

    this.router.navigate([this.returnUrl])
  });
}
submitStudentLogin(){
  this.isSubmitted = true;
  if(this.DataFormStudentLogin.invalid) {

    
    console.log("your input is not valid !!!!")

    return};

  /*alert(`number:${this.fc['number'].value}   
  ,
  password :${this.fc['password'].value}`) */     // to catch the email and the password submitted 
   
   // For the student login page

  this.studentService.login({     
    number:this.fcStudent['number'].value,
    password: this.fcStudent['password'].value,
  }).subscribe(()=>{
    this.router.navigate([this.returnUrl])
  });
}
}
