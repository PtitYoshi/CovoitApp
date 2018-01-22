import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule, Routes} from '@angular/router';
//import du composant
import {FindTComponent} from './find-t/find-t.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ConnectionComponent} from './connection/connection.component';
import{AdminTrajetTypeComponent} from './admin-trajet-type/admin-trajet-type.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

const routes :Routes=[
{path:'',redirectTo:'/connection',pathMatch:'full'},
{path:'trajet',component:FindTComponent,pathMatch:'full'},
{path:'inscription',component:InscriptionComponent,pathMatch:'full'},
{path:'connection',component:ConnectionComponent,pathMatch:'full'},
{path:'admin/trajet',component:AdminTrajetTypeComponent,pathMatch:'full'},
{path: 'commentaire',component:CommentaireComponent,pathMatch:'full'}
]





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  declarations: []
})

export class AppRoutingModule { }
