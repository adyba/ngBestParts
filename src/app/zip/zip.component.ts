import { Component, OnInit } from '@angular/core';
import { Observable, Subject, zip } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Alpha, AlphaService } from '../services/alpha.service';
import { Bravo, BravoService } from '../services/bravo.service';
import { Charlie, CharlieService } from '../services/charlie.service';

type VidgetModel = [Alpha, Bravo, Charlie];

interface VidgetResult {
  widgetModel: VidgetModel;
  widgetIndex: number;
  route: string;
}

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss'],
})
export class ZipComponent implements OnInit {
  constructor(
    public alphaService: AlphaService,
    public bravoService: BravoService,
    public charlieService: CharlieService
  ) {}

  alphaCounter = 1;
  bravoCounter = 1;
  charlieCounter = 1;

  widgetModel$!: Observable<VidgetModel>;

  alpha$ = new Subject<Alpha>();
  bravo$ = new Subject<Bravo>();
  charlie$ = new Subject<Charlie>();

  ngOnInit() {
    this.widgetModel$ = zip(
      this.alpha$.pipe(
        tap((res) => {
          console.log(res);
          this.alphaCounter++;
        })
      ),
      this.bravo$.pipe(
        tap((res) => {
          console.log(res);
          this.bravoCounter++;
        })
      ),
      this.charlie$.pipe(
        tap((res) => {
          console.log(res);
          this.charlieCounter++;
        })
      )
    ).pipe(
      tap(() => {
        console.log('ZIP is happy');
      })
    );
  }
}
