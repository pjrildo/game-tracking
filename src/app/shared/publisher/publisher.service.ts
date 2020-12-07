import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Publisher } from './publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private resource = 'publishers';
  path = environment.urlBase;    
  api = environment.urlBase+'/'+this.resource;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPublishers(): Observable<Publisher[]> {
    return this.httpClient.get<Publisher[]>(this.api)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

    getPublisherByID(valor:number): Observable<Publisher> {
      return this.httpClient.get<Publisher>(this.api+'/'+valor)
        .pipe(
          retry(2),
          catchError(this.handleError))
    }

    savePublisher(publisher: Publisher): Observable<Publisher> {
      console.log( JSON.stringify(publisher));
      return this.httpClient.post<Publisher>(this.api, JSON.stringify(publisher), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

  createPublisher() {
    return this.httpClient.get<Publisher>(this.api)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
      console.log(errorMessage, 'Client Error');
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      console.log(errorMessage, 'Server Error');
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}