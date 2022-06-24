import { Component, OnInit } from '@angular/core';
import { SharedStateService } from '../../shared-state/shared-state.service';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent implements OnInit {
  constructor(private sharedStateService: SharedStateService) {}

  ngOnInit(): void {}
}
