import { Component, OnInit } from '@angular/core';
import {New} from "../../dbclasses/New";
import {HttpService} from "../../http.service";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {Faction} from "../../dbclasses/Faction";

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css'],
  providers: [HttpService]
})
export class FactionsComponent implements OnInit {

  constructor(private httpService: HttpService, private http:HttpClient) { }

  ngOnInit() {
  }
  receivedFactions: Faction[]=[]; // received news
  done: boolean = false;
  bu1(){

    this.httpService.getAllFraction()
      .subscribe(
        (data: Faction[]) => {
          this.receivedFactions = data;
          this.done = true;
        },
        error => alert("Ну мы же попросили!")
      );

  }
  bu2(){

  }
  bu3(){

  }
  bu4(){

  }
  bu5(){

  }

}
