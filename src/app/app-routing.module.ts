import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsyncIsKingComponent } from './async-is-king/async-is-king.component';
import { PipesComponent } from './pipes/pipes.component';
import { ContainerComponent } from './shared-state/container/container.component';
import { ZipComponent } from './zip/zip.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

const routes: Routes = [
  { path: 'async-pipe', component: AsyncIsKingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'shared', component: ContainerComponent },
  { path: 'zip', component: ZipComponent },
  { path: 'merge-map', component: MergeMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
