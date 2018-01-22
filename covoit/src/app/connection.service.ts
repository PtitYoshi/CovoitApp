import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpEvent} from '@angular/common/http';
//import{Http} from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
//import { Response } from '_debugger';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
import { HttpEventType } from '@angular/common/http/src/response';
//import { users } from './connection/connection.component';
import 'rxjs/add/observable/from'; 

/*export class users{
 public static fromJson(json: Object): users {
      return new users(
          json['mail'],
          json['mdp'],
          json['nom'],
          json['prenom'],
          json['age'],
          json['adresse'],
          json['actif'],
          json['droit'],
         



      );
  }
  
  constructor(
    public mail:string,
    public mdp:string,
    public nom: string,
    public prenom: string,
    public age:string,
    public adresse:string,
    public actif:string,
    public droit: string,
    ) {
    }
}
*/
export interface  users {
    public mail:string,
    public mdp:string,
    public nom: string,
    public prenom: string,
    public age:string,
    public adresse:string,
    public actif:string,
    public droit: string,
  
}


@Injectable()
export class ConnectionService {

  constructor(private http: HttpClient) {
      
  }
   public connect(param:String):Observable<users>
    {
    
       console.log("je marche" );
        return this.http.get<users>('http://localhost:8888/connection/'+param);
            
    } 
/*
    public connect()
    {
        this.connections()
        data=>{}


    }

 */   
        //const u1 = new users('','','','');
        
       
            /*
      this.http.get<utilisateur>('http://localhost:8888/connection/'+param).subscribe(data => {
        console.log("user" );
        console.log("User Login: " + data.nom);
        console.log("Bio: " + data.email);
        console.log("Company: " + data.prenom);
        u1.nom=data.nom;
        u1.email=data.email;
        u1.prenom=data.prenom;
        u1.droit=data.mdp;
        console.log("u1: " + u1.nom);
        console.log("u1: " + u1.email);
        console.log("u1: " + u1.prenom)
            
      }); */
   

    }
  

  

}
