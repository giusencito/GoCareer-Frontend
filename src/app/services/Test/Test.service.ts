import { Test } from './../../models/Test';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TestService {


  basePath='http://localhost:3000/Test'
  basePathcommom='http://localhost:3000/Test?Personalized_like=false'
  basePathperzo='http://localhost:3000/Test?Personalized_like=true'
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


getById(id: any): Observable<Test> {
  return this.http.get<Test>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}
getAll(): Observable<Test> {
  return this.http.get<Test>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

update(id: any, item: any): Observable<Test> {
  return this.http.put<Test>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
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

create(item: any): Observable<Test> {
  return this.http.post<Test>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}
getallcommos(){
  return this.http.get<Test>(this.basePathcommom, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));


}
getallperzo(){

  return this.http.get<Test>(this.basePathperzo, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));



}





















}
