import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//export du service
import{FindTrajetDateService} from './find-trajet-date.service';
import {inscription_service} from './inscription.service';
import{ConnectionService}from './connection.service'; 


import { AppComponent } from './app.component';
import { FindTComponent } from './find-t/find-t.component';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { SessionService } from './session.service';
import { AdminTrajetTypeComponent } from './admin-trajet-type/admin-trajet-type.component'
import { AdminService } from './admin.service';
import { AdminMembreComponent } from './admin-membre/admin-membre.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    FindTComponent,
    InscriptionComponent,
    ConnectionComponent,
    AdminTrajetTypeComponent,
    AdminMembreComponent,
    CommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [FindTrajetDateService,inscription_service,ConnectionService,SessionService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
