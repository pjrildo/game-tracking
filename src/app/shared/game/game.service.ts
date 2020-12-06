import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private resource = 'games';
  path = environment.urlBase;    
  api = environment.urlBase+'/'+this.resource;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.api)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

    getGameByID(valor:number): Observable<Game> {
      return this.httpClient.get<Game>(this.api+'/'+valor)
        .pipe(
          retry(2),
          catchError(this.handleError))
    }

    saveGame(game: Game): Observable<Game> {
      console.log( JSON.stringify(game));
      return this.httpClient.post<Game>(this.api, JSON.stringify(game), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

  createGame() {
    return this.httpClient.get<Game>(this.api)
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