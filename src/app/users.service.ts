import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { BaseService } from './base-service';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http);
    this.apiUrl += '/get_data';
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiUrl}`)
      .pipe(
        tap(_ => this.log('fetched location types')),
        catchError(this.handleError<Users[]>('getUsers', []))
      );
  }
}
