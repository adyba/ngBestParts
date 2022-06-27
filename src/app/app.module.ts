import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncIsKingComponent } from './async-is-king/async-is-king.component';
import { PipesComponent } from './pipes/pipes.component';
import { PageAComponent } from './shared-state/page-a/page-a.component';
import { PageBComponent } from './shared-state/page-b/page-b.component';
import { ZipComponent } from './zip/zip.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ParentComponent } from './shared-state/page-a/parent/parent.component';
import { ChildComponent } from './shared-state/page-a/child/child.component';
import { ContainerComponent } from './shared-state/container/container.component';
import { ConcatAddress } from './pipes/concatAddress.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AsyncIsKingComponent,
    PipesComponent,
    PageAComponent,
    PageBComponent,
    ZipComponent,
    MergeMapComponent,
    ParentComponent,
    ChildComponent,
    ContainerComponent,
    ConcatAddress,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
