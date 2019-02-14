import { NotFoundError } from '../errors/not-found-error';
import { BadRequestError } from '../errors/bad-request-error';
import { AppError } from '../errors/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })

export class DataService {

    constructor(private url: string, private http: HttpClient) { }
  
    getAll(){
      return this.http.get(this.url)
      .pipe(
       map(response => response),
       catchError(this.handleError)
      );
      
    }
  
    private handleError(error : Response) {
      if(error.status === 400)
        return Observable.throw(new BadRequestError());
      if(error.status === 404)
        return Observable.throw(new NotFoundError());
      return Observable.throw(new AppError(error));
    }
  }
  


