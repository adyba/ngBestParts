import { Injectable } from '@angular/core';

export type Charlie = {
  api?: 'charlie';
  index: number;
  id?: number;
};
@Injectable({
  providedIn: 'root',
})
export class CharlieService {
  constructor() {}

  api(index: number) {
    return {
      api: 'charlie',
      index,
      id: new Date().getTime(),
    } as Charlie;
  }
}
