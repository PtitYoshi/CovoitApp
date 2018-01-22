import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  nom='';
  prenom='';
  droit='';
  email='';
  constructor() { }

  setNom(nom:string){
    this.nom=nom;
  }
  getNom(){
    this.nom;
  }
  setPrenom(prenom:string){
    this.prenom=prenom;
  }
  getPrenom(){
    this.prenom;
  }
  setDroit(droit:string){
    this.droit=droit;
  }
  getDroit(){
    this.droit;
  }
  setEmail(droit:string){
    this.droit=droit;
  }
  getEmail(){
    this.nom;
  }
}
