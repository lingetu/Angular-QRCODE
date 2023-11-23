import { Component, Input, Output, EventEmitter } from "@angular/core";

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faHome = faHome;
  faQrcode = faQrcode;
  faEnvelope = faEnvelope;
  faProjectDiagram = faProjectDiagram;
}
