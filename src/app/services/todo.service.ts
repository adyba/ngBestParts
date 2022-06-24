import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Todo } from '../models/todo.model';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  public fetchUserTodos(userId: number): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .pipe(take(1));
  }
}
