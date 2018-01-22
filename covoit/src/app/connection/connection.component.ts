import { Component} from '@angular/core';
//import { Component } from '@angular/core';
import{ConnectionService, users} from '../connection.service';
import{ActivatedRoute,Params} from '@angular/router';
import{Observable} from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Response } from '@angular/http/src/static_response';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';


export class userslist {
  public user: users[];
}




@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
/*

}*/
export class ConnectionComponent{
  mdp :string;
  mail: string;
  droit:string;
  answer:object;
  myForm:FormGroup;
  message_alert:string = 'champs requis';
  user:users;
  


  constructor(private fb: FormBuilder,private Connection: ConnectionService  ,private route: ActivatedRoute) {
    this.myForm = new FormGroup({
      'email': new FormControl(),
      'mdp': new FormControl(),
        
  });
  this.myForm = this.fb.group({
    'email': [null, Validators.required],
    'mdp': [null, Validators.required],
    
  });

      
   }
       
    Addpost(Post)
    {
      
      this.mdp=Post.mdp;
      this.mail=Post.email;
      console.log('je marche1');
      this.route.params.subscribe(params=>{
      this.Connection.connect(''+this.mail+'/'+this.mdp+'').subscribe(data => this.user=data      
      );
      
      console.log(this.user);
      }

    
    

}
