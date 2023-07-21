import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ISkcc } from './skcc.model';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable()
export class SkccService {

  constructor(private http: HttpClient, private router: Router) {
	    console.log('skcc service constructor');

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getSkccs(): Observable<ISkcc[]> {

    // this url should be mapped in the proxy.conf.json or similar file
    // to handle CORS

    return this.http.get<ISkcc[]>('http://localhost:3000/skcclist')
      .pipe(
        retry(3),
        catchError(this.handleError)
      );

  } // getSkccs

  saveSkcc(skcc: ISkcc): boolean {

    console.log(`saving skcc callsign: ${skcc?.callsign} member #: ${skcc?.membernbr}`);

    localStorage.setItem("skcc|" + skcc.callsign, JSON.stringify(skcc));

    return true;
  } // saveSkcc

  getSkcc(callsign: string) : ISkcc {

    console.log(`skcc-service: looking for skcc callsign: ${callsign}`);

    let theSkcc = localStorage.getItem("skcc|" + callsign);

    if (!theSkcc) {

      const url = `http://localhost:3000/skcc/${callsign}`;

      this.http.get<ISkcc>(url).subscribe(data => {
        console.info(`skcc-service:  Callsign found in db: ${callsign}`);

        localStorage.setItem("skcc|" + data.callsign, JSON.stringify(data));

        return data;
      });

    }

    let result: ISkcc = theSkcc ? JSON.parse(theSkcc) as ISkcc : { callsign: 'None' } as ISkcc;

    console.log(`skcc-service: results for lookup of callsign: ${callsign} are ${JSON.stringify(result)}`);

    return result;

  } // getSkcc

  getSkccPage(firstCall: string): Observable<ISkcc[]> {

    const theFirstCall = !!firstCall && firstCall !== '' ? firstCall.toUpperCase() : '';

    console.log(`skcc-service: requesting a new page with first call: ${theFirstCall}`);

    const url = `http://localhost:3000/skccpage/${theFirstCall}`;

    return this.http.get<ISkcc[]>(url);

  }

  setSkccList(skccList : ISkcc[]) {
    console.log('set skcc list is not implemented');
  }

}
