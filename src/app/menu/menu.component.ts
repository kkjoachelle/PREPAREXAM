import { Constantes } from './menu.constante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constantes ;
   
  constructor(constantes : Constantes) { 
    constantes = new Constantes();
    this.constantes = constantes;
  }

  ngOnInit() {

  }

}
