import { DataService } from './../services/data.services';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ConstanteService extends DataService{

    constructor(http : HttpClient){
        super('constantes.json', http);
    }
}