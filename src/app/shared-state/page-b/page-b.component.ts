import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GlobalState,
  SharedStateService,
} from '../../shared-state/shared-state.service';
@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.scss'],
})
export class PageBComponent implements OnInit {
  vm$!: Observable<GlobalState>;
  constructor(private sharedState: SharedStateService) {}

  ngOnInit(): void {
    this.vm$ = this.sharedState.get();
  }

  fooUp() {
    this.sharedState.fooUp();
  }

  fooReset() {
    this.sharedState.set(0);
  }
}
