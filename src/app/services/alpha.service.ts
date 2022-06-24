import { Injectable } from '@angular/core';

export type Alpha = {
  api?: 'alpha';
  index: number;
  id?: number;
};

@Injectable({
  providedIn: 'root',
})
export class AlphaService {
  constructor() {}

  public api(index: number) {
    return {
      api: 'alpha',
      index,
      id: new Date().getTime(),
    } as Alpha;
  }
}
