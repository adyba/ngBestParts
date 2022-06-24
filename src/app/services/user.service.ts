import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, shareReplay, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public fetchAll(): Observable<User[]> {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(take(1));
  }

  public fetchOne(id: number): Observable<User> {
    return this.http
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(take(1), shareReplay());
  }
}
