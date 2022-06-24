import { Component, OnInit } from '@angular/core';
import { map, Observable, Subject, switchMap } from 'rxjs';
import { Todo } from '../models/todo.model';
import { User } from '../models/user.model';
import { TodoService } from '../services/todo.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-async-is-king',
  templateUrl: './async-is-king.component.html',
  styleUrls: ['./async-is-king.component.scss'],
})
export class AsyncIsKingComponent implements OnInit {
  users$!: Observable<User[]>;
  singleUser$!: Observable<User>;
  userTodos$!: Observable<Todo[]>;

  selectedUserId$ = new Subject<number>();

  constructor(
    private userService: UserService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.users$ = this.userService.fetchAll();
    this.singleUser$ = this.userService.fetchOne(1);

    this.userTodos$ = this.selectedUserId$.pipe(
      switchMap((userId) =>
        this.todoService.fetchUserTodos(userId).pipe(
          // be carefull the payload that is going through the pipe is Array
          // of Todo[] because the fetchUserTodos returns Array of Todo

          // map((todos) => todos.filter((todo) => todo.completed)),
          map((todos) => todos.slice(0, 5))
        )
      )
    );
  }

  trackByFn(index: number, item: User): number {
    return item.id;
  }
}
