import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalState, SharedStateService } from '../../shared-state.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  vm$!: Observable<GlobalState>;
  constructor(private sharedState: SharedStateService) {}

  ngOnInit(): void {
    this.vm$ = this.sharedState.get();
  }

  counterUp() {
    console.log('counterUp from childs');
    this.sharedState.counterUp();
  }
}
