import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncIsKingComponent } from './async-is-king/async-is-king.component';
import { PipesComponent } from './pipes/pipes.component';
import { PageAComponent } from './shared-state/page-a/page-a.component';
import { PageBComponent } from './shared-state/page-b/page-b.component';
import { ZipComponent } from './zip/zip.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
  { path: 'async-pipe', component: AsyncIsKingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'shared-state-a', component: PageAComponent },
  { path: 'shared-state-b', component: PageBComponent },
  { path: 'zip', component: ZipComponent },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'protected', component: ProtectedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
