import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RegpageComponent } from './regpage/regpage.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContabusComponent } from './contabus/contabus.component';
import { ContcontComponent } from './contcont/contcont.component';
import { ContmainComponent } from './contmain/contmain.component';
import { GameComponent } from './game/game.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrdersComponent } from './gamecomp/orders/orders.component';
import { FactionsComponent } from './gamecomp/factions/factions.component';
import { PrisonersComponent } from './gamecomp/prisoners/prisoners.component';
import { UsersComponent } from './gamecomp/users/users.component';
import { RoomsComponent } from './gamecomp/rooms/rooms.component';
import { MessagesComponent } from './gamecomp/messages/messages.component';
import { ShopComponent } from './gamecomp/shop/shop.component';
import { ThingsComponent } from './gamecomp/things/things.component';



const appRoutes: Routes =[
  { path: '', component: ContmainComponent},
  { path: 'main', component: ContmainComponent},
  { path: 'login', component: RegpageComponent},
  { path: 'contacts', component: ContcontComponent},
  { path: 'news', component: NewsComponent},
  {path: 'about', component: ContabusComponent},
  {path: 'game', component: GameComponent},
  {path: '*', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegpageComponent,
    AboutComponent,
    NewsComponent,
    ContabusComponent,
    ContcontComponent,
    ContmainComponent,
    GameComponent,
    NotFoundComponent,
    OrdersComponent,
    FactionsComponent,
    PrisonersComponent,
    UsersComponent,
    RoomsComponent,
    MessagesComponent,
    ShopComponent,
    ThingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
