import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RegpageComponent } from './regpage/regpage.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes =[
  { path: '', component: AppComponent},
  { path: 'main', component: MainComponent},
  { path: 'login', component: RegpageComponent},
  //{ path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
