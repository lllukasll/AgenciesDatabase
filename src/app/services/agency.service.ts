import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

import { IAgency } from '../components/agency-list/agency';


@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  private agencyUrl = 'api/agency.json'

  constructor(private http: HttpClient) { }

  GetAgencies(): Observable<IAgency[]> {
    return this.http.get<IAgency[]>(this.agencyUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = 'An error occurred: ${err.error.message}';
    } else {
      errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
