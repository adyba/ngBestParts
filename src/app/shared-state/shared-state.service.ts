import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface GlobalState {
  foo: number;
  timeStamp: number;
}
@Injectable({
  providedIn: 'root',
})
export class SharedStateService {
  pendulum!: number;

  constructor() {
    this.clock(true);
  }

  private state$ = new BehaviorSubject<GlobalState>({
    foo: 0,
    timeStamp: 0,
  } as GlobalState);

  public get(): Observable<GlobalState> {
    return this.state$.asObservable();
  }

  public stopTheClock() {
    this.clock(false);
  }

  public set(newValue: number): void {
    this.state$.next(Object.assign(this.state$.getValue(), { foo: newValue }));
  }

  public fooUp(): void {
    this.state$.next(
      Object.assign(this.state$.getValue(), {
        foo: this.state$.getValue().foo + 1,
      })
    );
  }

  private clock(running: boolean) {
    if (running && !this.pendulum) {
      // https://www.designcise.com/web/tutorial/what-is-the-correct-typescript-return-type-for-javascripts-setinterval-function
      this.pendulum = window.setInterval(() => {
        this.state$.next(
          Object.assign(this.state$.getValue(), {
            timeStamp: new Date().getTime(),
          })
        );
      }, 1000);
    } else {
      if (this.pendulum) {
        clearInterval(this.pendulum);
      }
    }
  }
}
