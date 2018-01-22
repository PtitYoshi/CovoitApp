import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import{of} from 'rxjs/observable/of';
//import { Response } from '_debugger';
import 'rxjs/add/operator/map';

@Injectable()
export class FindTrajetDateService {

  constructor(private http: HttpClient) { }

  recherche_trajet(param:String): Observable<any>
  {
    //appel la route extern avec les params 
    let observable: Observable<any> =this.http.get("http://localhost:8888/trajet/"+param).map((res:Response)=>res);
    return observable;
  }


}
