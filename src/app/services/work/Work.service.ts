import { Injectable } from '@angular/core';
import { Work } from 'src/app/models/Work';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class WorkService {


  basePath='https://gocareer-backendapi.azurewebsites.net/api/Works';
  basePathcareerWorks='https://gocareer-backendapi.azurewebsites.net/api/Career'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }


constructor(private http: HttpClient) { }
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

getById(id: any): Observable<Work> {
  return this.http.get<Work>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}
getAll(): Observable<Work> {
  return this.http.get<Work>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

update(id: any, item: any): Observable<Work> {
  return this.http.post<Work>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
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

getallworksbycarreer(id:any){


  return this.http.get<Work>(`${this.basePathcareerWorks}/${id}/Work`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));




}


create(item: any): Observable<Work> {
  return this.http.post<Work>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}








}
