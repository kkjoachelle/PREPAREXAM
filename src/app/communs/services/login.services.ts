import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class LoginService {

    isLoggIn = false;

    tester(){
      
      return this.isLoggIn=true;
  }
 
}