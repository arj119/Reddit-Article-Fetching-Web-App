import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {SubredditPost} from '../DTOs/SubredditTopResponse';
import {environment} from "../../environments/environment.prod";
import {SubredditSearchResponse} from "../DTOs/SubredditSearchResponse";

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private http: HttpClient) { }
  // Base url
  baseurl = environment.api;

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
    return this.http.get<SubredditPost[]>(this.baseurl + '/api/posts/search/' + searchTerm)
      .pipe(
        retry(3),
        catchError(SubredditService.errorHandle)
      );
  }

  // GET
  GetSubredditSearchResults(searchTerm: string): Observable<SubredditSearchResponse[]> {
    return this.http.get<SubredditSearchResponse[]>(this.baseurl + '/api/subreddit/search/' + searchTerm)
      .pipe(
        retry(3),
        catchError(SubredditService.errorHandle)
      );
  }
}
