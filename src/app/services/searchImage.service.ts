import {Image} from '../models/image.model';
import {IImage} from "../models/IImage";
import {Injectable} from "@angular/core";
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import {environment} from '../../environments/environment';
 import "rxjs/Rx";
import { enableDebugTools } from '@angular/platform-browser/src/browser/tools/tools';
import { forEach } from '@angular/router/src/utils/collection';

 
 @Injectable()
export class SearchImageService{
    MyURL:string = environment.PIXABAY_API_URL;
    myKey :string = environment.PIXABAY_API_KEY;

    images:IImage[];
  
    constructor(private http: Http) {
        this.images = [];
    }
    
    getImages(word:string) {
        return this.http
            .get(this.MyURL+this.myKey+"&q="+word)
            .map((res)=>{
                return res.json() })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
    storeImage(images:IImage[]){
        this.images = images;
    }

}