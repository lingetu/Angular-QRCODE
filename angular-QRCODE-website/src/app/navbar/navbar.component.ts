import { Component, OnInit } from "@angular/core";
import { faEnvelope, faHome, faProjectDiagram, faQrcode, faUser } from "@fortawesome/free-solid-svg-icons";
import { StudentService } from "../services/student.service";
import { Student } from "../shared/models/student";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faHome = faHome;
  faQrcode = faQrcode;
  faEnvelope = faEnvelope;
  faProjectDiagram = faProjectDiagram;
  faUser = faUser;
  student!:Student;

  constructor(studentService :StudentService){
    studentService.studentObservable.subscribe((newStudent)=>{
      this.student = newStudent;

    })
  }
  ngOnInit(): void {
      
  }
}
