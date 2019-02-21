import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Constantes } from './menu/menu.constante';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudesComponent } from './etudes/etudes.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CoursComponent } from './cours/cours.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ConstantesFooter } from './footer/footer.constante';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { LoginService } from './communs/services/login.services';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudesComponent,
    UtilisateurComponent,
    CoursComponent,
    SpecialiteComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
    RouterModule.forRoot([
      {
        path : 'accueil',
        component: HomeComponent
      },
      {
        path : 'contact',
        component: ContactComponent
      },
      {
        path : 'login',
        component: LoginComponent
      }

    ])
  ],
  entryComponents:[],
  
  providers: [
    Constantes,
    ConstantesFooter,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
