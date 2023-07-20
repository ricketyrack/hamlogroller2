import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';
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

  saveSkcc(skccForm: FormGroup): boolean {

    console.log(`saving skcc: ${skccForm.value}`);

    return true;
  } // saveSkcc

  getSkcc(memberNumber: number) : any {

    console.log('skcc-service: looking for skcc member#:' + memberNumber);

    const theSkcc = localStorage.getItem(memberNumber.toString());

    let thisSkcc: any = undefined;

    if (theSkcc !== undefined) {
      const strSkcc = theSkcc ? theSkcc : '';
      thisSkcc = JSON.parse(strSkcc) as ISkcc;
    }

    return thisSkcc;

  } // getSkcc

  getSkccPage(firstCall: string): Observable<ISkcc[]> {

    console.log(`skcc-service: requesting a new page with first call: ${firstCall}`);

    return this.http.get<ISkcc[]>('http://localhost:3000/skccpage',
               { params: new HttpParams().set('firstcall', firstCall)})
      .pipe(
        retry(3),
        catchError(this.handleError)
      );

  }

  setSkccList(skccList : ISkcc[]) {
    console.log('set skcc list is not imlemented');
  }

}
