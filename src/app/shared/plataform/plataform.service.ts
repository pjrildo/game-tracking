import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Plataform } from './plataform';

@Injectable({
  providedIn: 'root'
})
export class PlataformService {

  private resource = 'plataforms';
  path = environment.urlBase;
  api = environment.urlBase + '/' + this.resource;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPlataforms(): Observable<Plataform[]> {
    return this.httpClient.get<Plataform[]>(this.api)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getPlataformById(valor: number): Observable<Plataform> {
    return this.httpClient.get<Plataform>(this.api + '/' + valor)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  savePlataform(plataform: Plataform): Observable<Plataform> {
    console.log(JSON.stringify(plataform));
    return this.httpClient.post<Plataform>(this.api, JSON.stringify(plataform), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deletePlataformById(valor: number): Observable<void> {
    return this.httpClient.delete<void>(this.api + '/' + valor)
    .pipe(
      retry(2),
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