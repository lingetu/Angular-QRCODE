import { Component, OnInit } from "@angular/core";
import { faCalendar, faEnvelope, faHome, faProjectDiagram, faQrcode, faUser, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { StudentService } from "../services/student.service";
import { Student } from "../shared/models/student";

@Component({
  selector: 'app-navbar-guest',
  templateUrl: './navbar-guest.component.html',
  styleUrls: ['./navbar-guest.component.css']
})
export class NavbarGuestComponent implements OnInit {

  faHome = faHome;
  faQrcode = faQrcode;
  faEnvelope = faEnvelope;
  faProjectDiagram = faProjectDiagram;
  faCalendarWeek = faCalendar;
  faUser = faUser;
  faEdite = faUserPen;
  student!:Student;

  constructor(studentService :StudentService){
    studentService.studentObservable.subscribe((newStudent)=>{
      this.student = newStudent;

    })
  }
  ngOnInit(): void {

  }
}
