import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {SubredditPost, SubredditTopResponse} from '../DTOs/SubredditTopResponse';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private http: HttpClient) { }
  // Base url
  baseurl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Error handling
  private static errorHandle(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  // GET
  GetPosts(searchTerm: string): Observable<SubredditPost[]> {
    return this.http.get<SubredditPost[]>(this.baseurl + '/api/search/' + searchTerm)
      .pipe(
        retry(3),
        catchError(SubredditService.errorHandle)
      );
  }
}
