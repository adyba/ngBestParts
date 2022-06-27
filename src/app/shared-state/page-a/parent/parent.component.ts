import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalState, SharedStateService } from '../../shared-state.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  vm$!: Observable<GlobalState>;
  constructor(private sharedState: SharedStateService) {}

  ngOnInit(): void {
    this.vm$ = this.sharedState.get();
  }

  stopTheClock() {
    this.sharedState.stopTheClock();
  }
}
