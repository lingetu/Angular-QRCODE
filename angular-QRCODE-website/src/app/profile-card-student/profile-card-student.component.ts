import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../shared/models/student';

@Component({
  selector: 'app-profile-card-student',
  templateUrl: './profile-card-student.component.html',
  styleUrls: ['./profile-card-student.component.css']
})
export class ProfileCardStudentComponent {
  public getScreenWidth: any;
  public getScreenHeight: any;
  public getQrCodeWidth: any;
  student:Student;

  constructor(private studentService :StudentService){}


  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;

      this.studentService.studentObservable.subscribe((newStudent)=>{
        this.student = newStudent;

      })
     if(this.student.name == undefined){
       //Rediriger vers la page de connexion
       window.location.href = "/formLogin";
     }

  }



}
