
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

class   trajetT {
  constructor(
 public mail:string,
 public villea:string,
 public villed:string,
 public distance: string,
 public temps: string
  ){}
}

class   membre {
  constructor(
 public mail:string,
 public mdp:string,
 public num:string,
 public nom:string,
 public prenom:string,
 public age: string,
 public adresse: string,
 public actif:string,
 public type:string
  ){}
}


@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }
  public create_trajet(param:String):Observable<trajetT>
  {
  
    let body = JSON.stringify(param);
    let observable : Observable<any> = this.http.put("http://localhost:8888/trajetT/ajout/mamar.merabi@gmail.com/"+param,body).map((res:Response)=>res);
    return observable
          
  } 

  public all_trajet():Observable<trajetT[]>
  {
  
     console.log("je marche" );
      return this.http.get<trajetT[]>('http://localhost:8888/trajetT').map(res => { 
        return res.map(item => { 
          return new trajetT( 
              item.mail,
              item.villea,
              item.villed,
              item.distance,
              item.temps
          );
        });
      });;
          
  } 
  public all_membre():Observable<membre[]>
  {
  
     console.log("je marche" );
      return this.http.get<membre[]>('http://localhost:8888/user').map(res => { 
        return res.map(item => { 
          return new membre( 
              item.mail,
              item.mdp,
              item.num,
              item.nom,
              item.prenom,
              item.age,
              item.adresse,
              item.actif,
              item.type
          );
        });
      });;
  }
  public update_membres(param:String)
  {
    let body = JSON.stringify(param);
    let observable : Observable<any> = this.http.put("http://localhost:8888/user/update/mamar.merabi@gmail.com/"+param,body).map((res:Response)=>res);
  } 
}
