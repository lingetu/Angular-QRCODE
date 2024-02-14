import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { Guest } from '../shared/models/guest';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent {

guest: Guest;

constructor(private route: ActivatedRoute, private guestService: GuestService) { }

ngOnInit() {

  this.route.queryParams.subscribe(params => {
    const id = params['id']; // Récupérer le paramètre 'id' de l'URL
    if (id) {
      // Si l'ID est présent dans l'URL, vous pouvez charger les données du guest correspondant
      this.loadGuestById(id);
    }
  });
}

loadGuestById(id: string) {
  this.guestService.getGuestLive(id).subscribe((guest: Guest) => {
    this.guest = guest;
  });
}
}
