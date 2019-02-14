import { ConstanteService } from './constante.service';
import { Component, OnInit, Injectable } from '@angular/core';


@Component({
    selector:'',
    templateUrl:'./',

})

export class ConstanteComponent implements OnInit{
    constantes;
    constructor(private service : ConstanteService){
    
    }
      ngOnInit(){
       this.service.getAll()
       .subscribe(

        constantes => this.constantes = constantes
       );
      }
}