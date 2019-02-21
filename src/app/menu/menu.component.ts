import { LoginService } from './../communs/services/login.services';
import { Constantes } from './menu.constante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constantes ;
  isLoggin;
  constructor(constantes : Constantes, private service : LoginService) { 
    constantes = new Constantes();
    this.constantes = constantes;
  }

  ngOnInit() {
   this.isLoggin = this.service.tester();
   //this.isLoggin = false;
  }
 
 


}
