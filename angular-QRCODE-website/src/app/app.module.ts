/*CORE MODULE */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*MODULE*/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QRCodeModule } from 'angularx-qrcode';

/*ROUTING*/
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

/*BACKEND*/
import { HttpClientModule } from '@angular/common/http';

/*COMPONENT */
import { AppComponent } from './app.component';
import { FormQrcodeCompanyComponent } from './form-qrcode-company/form-qrcode-company.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NullUrlComponent } from './null-url/null-url.component';
import { ProfileCardGuestComponent } from './profile-card-guest/profile-card-guest.component';
import { QrCodeComponentComponent } from './qr-code-component/qr-code-component.component';
import { QrCodePageComponent } from './qr-code-page/qr-code-page.component';
/*FORM*/
import { ReactiveFormsModule } from '@angular/forms';
import { FormQrcodeEtudiantComponent } from './form-qrcode-etudiant/form-qrcode-etudiant.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileCardStudentComponent } from './profile-card-student/profile-card-student.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
// the following is added by Falilou :
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    QrCodeComponentComponent,
    NavbarComponent,
    NullUrlComponent,
    HomeComponent,
    QrCodePageComponent,
    ProfileCardGuestComponent,
    FormQrcodeCompanyComponent,
    FormQrcodeEtudiantComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ProfileCardStudentComponent,
  ],


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    QRCodeModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut : 3000,
      positionClass :'toast-bottom-right',
      newestOnTop:false
    }),
    
    


  
    
      RouterModule.forChild([
        { path: '', redirectTo:'home', pathMatch:'full'},
        /*Home page quand on est déjà login affiche le profile avec nos informations*/
        { path: 'home', component: HomeComponent},
        { path: 'home2', component: ProfileCardStudentComponent},        /* Form à remplir pour obtenir son QRCODE quand on est extérieur à l'école*/
        { path: 'formCompany', component: FormQrcodeCompanyComponent},
        /**Form login si admin redirige vers page admin, si étudiant/invité redirige vers scanneur de qrcode/home(profile) */
        { path: 'formLogin', component: LoginPageComponent},
        /**S'enregistrer avec son mail ou numéro étudiant */
        { path: 'formRegistration', component: RegistrationPageComponent},
        { path: 'formEtudiant', component: FormQrcodeEtudiantComponent},
        { path: '**', component: NullUrlComponent},
       
       

      ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
