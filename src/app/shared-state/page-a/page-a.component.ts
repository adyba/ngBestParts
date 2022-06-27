import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalState, SharedStateService } from '../../shared-state/shared-state.service';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent implements OnInit {
  public vm$!: Observable<GlobalState>;
  constructor(private sharedState: SharedStateService) {}

  ngOnInit(): void {
    this.vm$ = this.sharedState.get();
  }

  fooUp() {
    this.sharedState.fooUp();
  }
}
