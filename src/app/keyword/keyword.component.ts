import { Component, OnInit,Input } from '@angular/core';
import {Keyword} from '../models/keyword.model';
import{KeywordService}  from '../services/keyword.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Route } from '@angular/router/src/config';
@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit {
@Input() keyword:Keyword;

  constructor(private rdService:KeywordService,
    private router:Router,
    private activatedroute:ActivatedRoute,
    private myRoute:Router) {
   
   }

  ngOnInit() {
  }
  redirect(){
 this.myRoute.navigateByUrl('/DisplayImage');
  }
}
