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

  constructor(){}

  ngOnInit() {
  }


}
