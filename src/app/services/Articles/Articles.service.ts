import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { Article } from 'src/app/models/Article';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
basePath='https://gocareer-backendapi.azurewebsites.net/api/Articles';
basePathcareerArticles="https://gocareer-backendapi.azurewebsites.net/api/Career"

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

getById(id: any): Observable<Article> {
  return this.http.get<Article>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}
getAll(): Observable<Article> {
  return this.http.get<Article>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

update(id: any, item: any): Observable<Article> {
  return this.http.post<Article>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
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

getallarticlesbycarreer(id:any){


  return this.http.get<Article>(`${this.basePathcareerArticles}/${id}/Articles`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));




}
create(item: any): Observable<Article> {
  return this.http.post<Article>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}















































}
