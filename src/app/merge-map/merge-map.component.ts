import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, Subject, zip } from 'rxjs';
import { map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { Alpha, AlphaService } from '../services/alpha.service';
import { Bravo, BravoService } from '../services/bravo.service';
import { Charlie, CharlieService } from '../services/charlie.service';

type VidgetModel = [Alpha, Bravo, Charlie];
interface PageRequest {
  route: string;
  amount: number;
}

interface VidgetResult {
  widgetModel: VidgetModel;
  widgetIndex: number;
  route: string;
}

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
  constructor(
    public alphaService: AlphaService,
    public bravoService: BravoService,
    public charlieService: CharlieService,
    private cd: ChangeDetectorRef
  ) {}

  alphaCounter = 1;
  bravoCounter = 1;
  charlieCounter = 1;

  result$!: Observable<VidgetResult>;
  widgetModel$!: Observable<VidgetModel>;

  routeChange$ = new Subject<PageRequest>();
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

    this.result$ = this.routeChange$.pipe(
      tap((rc: PageRequest) => console.log('RouteChange', rc)),
      //mergeMap((rc) => this.widgetModel$)
      mergeMap(({ amount, route }) =>
        this.widgetModel$.pipe(
          take(amount),
          map((wm: VidgetModel, index) => ({
            widgetModel: wm,
            widgetIndex: index + 1,
            route,
          }))
        )
      ),
      tap((result) => console.log('WidgetModel', result))
    );
  }

  dispatchPageChange(route: string, widgetAmount: number) {
    console.clear();
    this.routeChange$.next({
      route: route,
      amount: widgetAmount,
    });
  }

}
