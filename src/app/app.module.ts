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

@NgModule({
  declarations: [
    AppComponent,
    EtudesComponent,
    UtilisateurComponent,
    CoursComponent,
    SpecialiteComponent,
    MenuComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Constantes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
