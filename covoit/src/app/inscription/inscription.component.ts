import { Component } from '@angular/core';
import{inscription_service} from '../inscription.service';
import{ActivatedRoute,Params} from '@angular/router';
import{Observable} from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
  
})
export class InscriptionComponent {
  nom :string;
  prenom:string;
  mail: string;
  num:string;
  droit:string;
  note:string;
  answer:object;
  myForm:FormGroup;
  message_alert:string = 'champs requis';

  constructor(private fb: FormBuilder,private inscription: inscription_service  ,private route: ActivatedRoute) {
    this.myForm = new FormGroup({
      'nom': new FormControl(),
      'prenom': new FormControl(),
      'num': new FormControl(),
      'email': new FormControl()
      
   });
    
    this.myForm = this.fb.group({
      'nom': [null, Validators.required],
      'prenom': [null, Validators.required],
      'email': [null, [Validators.pattern('[a-z0-9.@]*')]],
      'num': [null,Validators.pattern('[0-9]*') ]
    });



   }

   Addpost(Post)
   {
     this.nom=Post.nom;
     this.prenom=Post.prenom;
     this.mail=Post.email;
     this.num=Post.num; 
     this.droit="1";
     this.note="0";
   this.route.params.subscribe(params=>{
     this.inscription.create_inscription(''+this.nom+'/'+this.prenom+'/'+this.mail+'/'+this.droit+'/'+this.num+'/').subscribe(res => this.answer=res);
   });
   }
   }
    /*
  ngOnInit() {
    this.Form = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      email: new FormControl(''),
      num: new FormControl(''),
    });
  }
  onSubmit(myForm: FormGroup){
   
   
}
*/