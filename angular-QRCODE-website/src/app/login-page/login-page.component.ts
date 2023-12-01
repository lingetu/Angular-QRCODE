import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

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

  DataForm !: FormGroup;
  isSubmitted = false;
  returnUrl = '';

  payLoad: any;
  
  constructor(private formBuilder: FormBuilder ,

     private studentService :StudentService ,
     private activatedRoute : ActivatedRoute,
     private router: Router) {}


  ngOnInit(): void{
    this.DataForm = this.formBuilder.group({
      number:['', Validators.required],
      password:['', Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }



 PreviewData() 
    {
         this.payLoad = JSON.stringify(this.DataForm.value);
         console.log(this.payLoad);
    }



    // This is added by Falilou for testing !!!!
get fc (){
  return this.DataForm.controls;
}

submit(){
  this.isSubmitted = true;

  if(this.DataForm.invalid) {

    // test on the terminal
    console.log("your input is not valid !!!!")

    return};

  /*alert(`number:${this.fc['number'].value}   
  ,
  password :${this.fc['password'].value}`) */     // to catch the email and the password submitted 
   
   // For the student login page

  this.studentService.login({     
    number:this.fc['number'].value,
    password: this.fc['password'].value,
  }).subscribe(()=>{
    this.router.navigateByUrl(this.returnUrl);
  });
}





}
