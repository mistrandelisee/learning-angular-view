import { personne } from './personne.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersoneService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private apiTest = `https://learn-node-postgres.herokuapp.com/api`
  private apiUrl = `https://learn-node-postgres.herokuapp.com`;//https://learn-node-postgres.herokuapp.com/
  constructor(private http: HttpClient ) { }
  addPerson(user : personne) {//ok
    let res;
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    return this.http.post<personne>( this.apiUrl+'/persone/new', JSON.stringify(user), {
      headers: headers
    }).pipe(
      tap(_ =>console.log('fetched heroes')),
      catchError(this.handleError<any>('getHeroes', []))
      );
  }
  home(): Observable<any> {//ok
    return this.http.get<any>(this.apiTest)
  }
  gohome(): any {
    return this.http.get<any>(this.apiTest)
      .pipe(
        tap(_ =>console.log('fetched heroes')),
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError<any>('getHeroes', []))
        );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return null;
    };
  }
}
