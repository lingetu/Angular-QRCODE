import { Component,OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { GuestService } from '../services/guest.service';
import { Guest } from '../shared/models/guest';
import { Student } from '../shared/models/student';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-scanqrcode',
  templateUrl: './scanqrcode.component.html',
  styleUrls: ['./scanqrcode.component.css']
})
export class ScanqrcodeComponent {

done:number = 1;

constructor(private route: ActivatedRoute, private guestService: GuestService) {}

ngOnInit() {

  this.route.queryParams.subscribe(params => {
    const idEvent = params['idEvent']; // Récupérer le paramètre 'id' de l'URL
    const idGuest = params['idEvent']; // Récupérer le paramètre 'id' de l'URL
    const idStudent = params['idEvent']; // Récupérer le paramètre 'id' de l'URL
    if (idEvent && idGuest && idStudent) {
      // Si l'ID est présent dans l'URL, vous pouvez charger les données du guest correspondant
      this.addStudentToEvent(idEvent,idGuest,idStudent);
    }
  });

}
  addStudentToEvent(idEvent: string,idGuest: string,idStudent: string) {
    // this.guestService.addStudentToEvent(idEvent,idGuest,idStudent).subscribe((guest: Guest) => {
    // this.done=1;
    // });
  }

}
