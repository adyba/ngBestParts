import { Injectable } from '@angular/core';

export type Bravo = {
  api?: 'bravo';
  index: number;
  id?: number;
};
@Injectable({
  providedIn: 'root',
})
export class BravoService {
  constructor() {}

  api(index: number) {
    return {
      api: 'bravo',
      index,
      id: new Date().getTime(),
    } as Bravo;
  }
}
