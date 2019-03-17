import { Component, OnInit } from '@angular/core';
import {User} from "../dbclasses/User";
import {HttpService} from "../http.service";
import {New} from "../dbclasses/New";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  but:string = "";
  // isOrders:boolean;
  // isFaction:boolean;
  // isPrisoners:boolean;

  constructor(){}

  ngOnInit() {
  }
  b1(){
    this.but = "Orders";
  }
  b2(){
    this.but = "Factions";
  }
  b3(){
    this.but = "Prisoners";
  }
  b4(){
    this.but = "Users";
  }
  b5(){
    this.but = "Rooms";
  }
  b6(){
    this.but = "Mails";
  }
  b7(){
    this.but = "Shop";
  }
  b8(){
    this.but = "Things";
  }
  b9(){
    this.but = "TEST";
  }

}
