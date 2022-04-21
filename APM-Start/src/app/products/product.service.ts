import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

// providedIn: 'root' is a Root Injector -> the service will be available throughout the whole app
// Recommended for most scenarios; Singleton;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //MOCKED DATA WHICH SHOULD BE GOT FROM THE DATA BASE (IF ANY)
  private productUrl = 'api/products/products.json'

  constructor(private http:HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

function providedIn(providedIn: any, arg1: string) {
    throw new Error("Function not implemented.");
}

