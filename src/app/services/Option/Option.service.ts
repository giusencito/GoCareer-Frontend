import { Option } from './../../models/Option';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  basePath='https://gocareer-backendapi.azurewebsites.net/api/Options'
basePathOptionsPerQuestion='https://gocareer-backendapi.azurewebsites.net/api/Question'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }


constructor(private http:HttpClient) { }


handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.log(`An error occurred: ${error.error.message} `);
  }
  else {
    console.error(
      `Backend returned code ${error.status}, body was: ${error.error}`
    );
  }

  return throwError('Something happened with request, please try again later');
}


getById(id: any): Observable<Option> {
  return this.http.get<Option>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}
getAll(): Observable<Option> {
  return this.http.get<Option>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

update(id: any, item: any): Observable<Option> {
  return this.http.put<Option>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}
delete(id: any) {
  return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

create(item: any): Observable<Option> {
  return this.http.post<Option>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}


getallOptionsbyQuestion(id:any){


  return this.http.get<Option>(`${this.basePathOptionsPerQuestion}/${id}/Option`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));




}








}
