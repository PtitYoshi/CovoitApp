import { Component, OnInit } from '@angular/core';
import{FindTrajetDateService} from '../find-trajet-date.service';
import{ActivatedRoute,Params} from '@angular/router';
import{Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-find-t',
  templateUrl: './find-t.component.html',
  styleUrls: ['./find-t.component.css']
})
export class FindTComponent implements OnInit {
  //recupère la liste
  answer: Object;
  villeD: String; 
  villeA: String;
  dates:String;

  constructor(private trajet: FindTrajetDateService  ,private route: ActivatedRoute ) { 

  }

  ngOnInit() {

    

  }

 onSubmit(){
  this.route.params.subscribe(params=>{
    this.trajet.recherche_trajet(''+this.dates+'/'+this.villeD+'/'+this.villeA).subscribe(res => this.answer=res);
  });
  console.log(this.answer);
 }
 
 
}
