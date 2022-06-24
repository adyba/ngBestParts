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
import { ProtectedComponent } from './protected/protected.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncIsKingComponent,
    PipesComponent,
    PageAComponent,
    PageBComponent,
    ZipComponent,
    MergeMapComponent,
    ProtectedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
