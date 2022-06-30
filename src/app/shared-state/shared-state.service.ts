import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

export interface GlobalState {
  counter: number;
  timeStamp: number;
}
@Injectable({
  providedIn: 'root',
})
export class SharedStateService {
  // https://www.designcise.com/web/tutorial/what-is-the-correct-typescript-return-type-for-javascripts-setinterval-function
  pendulum!: number;

  constructor() {
    this.clock(true);
  }

  private state$ = new BehaviorSubject<GlobalState>({
    counter: 0,
    timeStamp: 0,
  } as GlobalState);

  public get(): Observable<GlobalState> {
    return this.state$.asObservable().pipe(shareReplay());
  }

  public stopTheClock() {
    this.clock(false);
  }

  public set(newValue: number): void {
    this.state$.next(Object.assign(this.state$.getValue(), { counter: newValue }));
  }

  public counterUp(): void {
    this.state$.next(
      Object.assign(this.state$.getValue(), {
        counter: this.state$.getValue().counter + 1,
      })
    );
  }

  private clock(running: boolean) {
    if (running && !this.pendulum) {
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
