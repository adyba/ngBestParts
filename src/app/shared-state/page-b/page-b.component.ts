import { Component, OnInit } from '@angular/core';
import { SharedStateService } from '../../shared-state/shared-state.service';
@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.scss'],
})
export class PageBComponent implements OnInit {
  constructor(private sharedStateService: SharedStateService) {}

  ngOnInit(): void {}
}
