import { Component } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { Input } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { IEventCreation } from '../shared/interfaces/IEventCreation';
@Component({
  selector: 'app-present-list',
  templateUrl: './present-list.component.html',
  styleUrls: ['./present-list.component.css']
})
export class PresentListComponent {

  @Input() presentList: any;


}
