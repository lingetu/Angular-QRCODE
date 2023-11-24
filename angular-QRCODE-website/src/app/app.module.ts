/*CORE MODULE */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*MODULE*/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QRCodeModule } from 'angularx-qrcode'

/*ROUTING*/
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

/*BACKEND*/
import { HttpClientModule } from '@angular/common/http';

/*COMPONENT */
import { AppComponent } from './app.component';
import { QrCodeComponentComponent } from './qr-code-component/qr-code-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NullUrlComponent } from './null-url/null-url.component';
import { HomeComponent } from './home/home.component';
import { QrCodePageComponent } from './qr-code-page/qr-code-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    QrCodeComponentComponent,
    NavbarComponent,
    NullUrlComponent,
    HomeComponent,
    QrCodePageComponent,
    ProfileCardComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    QRCodeModule,
    HttpClientModule,


  
    
      RouterModule.forChild([
        { path: '', redirectTo:'home', pathMatch:'full'},
        { path: 'qrcode', component: QrCodePageComponent},
        { path: 'home', component: HomeComponent},
        { path: '**', component: NullUrlComponent}
       

      ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
