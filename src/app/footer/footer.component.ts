import { Component, OnInit } from '@angular/core';
import { ConstantesFooter } from './footer.constante';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constantes;
  constructor(constantes : ConstantesFooter) { 
   
    constantes = new ConstantesFooter();
    this.constantes = constantes;

  }

  ngOnInit() {
  }

}
