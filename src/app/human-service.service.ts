import { human } from '../models/human';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HumanServiceService {
httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // private apiTest =`http://127.0.0.1:3000/api`;// `https://learn-node-postgres.herokuapp.com/api`
  private apiTest =`https://learn-node-postgres.herokuapp.com/api`
  // private apiUrl = `http://127.0.0.1:3000`;//https://learn-node-postgres.herokuapp.com/
  private apiUrl = `https://learn-node-postgres.herokuapp.com`;//https://learn-node-postgres.herokuapp.com/
  constructor(private http: HttpClient ) { }
  addPerson(userData : any) {//ok
    let res;
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    return this.http.post<human>( this.apiUrl+'/persone/newobj', JSON.stringify(userData), {
      headers: headers
    }).pipe(
      tap(_ =>console.log('add a member processing...')),
      catchError(this.handleError<any>('add Member Err', []))
      );
  }
  updatePerson(userNewData : any) {//ok
    let res;
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    return this.http.post<human>( this.apiUrl+'/persone/update', JSON.stringify(userNewData), {
      headers: headers
    }).pipe(
      tap(_ =>console.log('update a member processing...')),
      catchError(this.handleError<any>('update menber Err', []))
      );
  }
  allPersons():Observable<human> {
    let res;

    return this.http.get<human>( this.apiUrl+'/persone/').pipe(
      tap(_ =>console.log('fetched humans')),
      retry(3)
      // , // retry a failed request up to 3 times
      // catchError(this.handleError<any>('getpersonnes', []))
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
      let pers:Observable<T>;
      // Let the app keep running by returning an empty result.
      return pers;
    };
  }
}
