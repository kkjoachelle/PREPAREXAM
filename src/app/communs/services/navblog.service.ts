import { DataService } from './data.services';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBlogService {
    private links = new Array<{text: string, path: string}>();
    private isLoggedIn = new Subject<boolean>();

    constructor(private dataService: DataService){
      
    }
}  

