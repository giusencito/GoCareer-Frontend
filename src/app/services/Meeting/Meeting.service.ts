import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { Meeting } from 'src/app/models/Meeting';
@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  basePath='http://localhost:3000/Meeting';
  basePathmeetingbyespecialist='http://localhost:3000/Especialist'
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

getById(id: any): Observable<Meeting> {
  return this.http.get<Meeting>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}
getAll(): Observable<Meeting> {
  return this.http.get<Meeting>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

update(id: any, item: any): Observable<Meeting> {
  return this.http.post<Meeting>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
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


create(item: any): Observable<Meeting> {
  return this.http.post<Meeting>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

getallMeetingsbyespecialist(id:any){


  return this.http.get<Meeting>(`${this.basePathmeetingbyespecialist}/${id}/Meeting`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));




}













}
