import { Component,OnInit } from '@angular/core';
import{ActivatedRoute,Params} from '@angular/router';
import{Observable} from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
export interface  trajetT {
  mail:string,
  villea:string,
  villed:string,
  distance: string,
  temps: string
}


@Component({
  selector: 'app-admin-trajet-type',
  templateUrl: './admin-trajet-type.component.html',
  styleUrls: ['./admin-trajet-type.component.css']
})
export class AdminTrajetTypeComponent implements OnInit{
  villed :string;
  villea:string;
  distance: string;
  temps:string;
  myForm:FormGroup;
  message_alert:string = 'champs requis';
  trajets :trajetT;

  constructor(private fb: FormBuilder,private admin: AdminService ,private route: ActivatedRoute) {
    this.myForm = new FormGroup({
      'villed': new FormControl(),
      'villea': new FormControl(),
      'distance':new FormControl(),
      'temps':new FormControl(),

        
  });
  this.myForm = this.fb.group({
    'villed': [null, Validators.required],
    'villea': [null, Validators.required],
    'distance': [null, Validators.required],
    'temps': [null, Validators.required],
  });

      
   }
   ngOnInit() {
    this.route.params.subscribe(params=>{
      this.admin.all_trajet().subscribe(res => this.trajets=res);
    });

    
     
  }


 Addpost(Post)
   {
     this.villed=Post.villed;
     this.villea=Post.villea;
     this.distance=Post.distance;
     this.temps=Post.temps; 
   this.route.params.subscribe(params=>{
     this.admin.create_trajet(''+this.villed+'/'+this.villea+'/'+this.distance+'/'+this.temps);
   });
   }
}
