import {Component, OnInit} from "@angular/core";
 import {ApiService} from "../services/api.service";
 import {IPosts} from "../model/api.model";
 
 @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css'],
     providers: [ApiService]
 })
 export class AppComponent implements OnInit {
     _postsArray: IPosts[];
 
     constructor(private apiSerivce: ApiService) {
     }
 
     getPosts(): void {
         this.apiSerivce.getPosts()
             .subscribe(
                 resultArray => this._postsArray = resultArray,
                 error => console.log("Error :: " + error)
             )
     }
 
     ngOnInit(): void {
         this.getPosts();
     }
 }