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
  text : string = "";
  fraction : Faction =new Faction;
  bu1(){

    this.httpService.getAllFraction()
      .subscribe(
        (data: Faction[]) => {
          this.receivedFactions = data;
          this.printer();
          this.done = true;
        },
        error => alert("Ну мы же попросили!")
      );

  }
  printer(){
    this.text="";
    let i : number = 0;
    this.receivedFactions.forEach((receivedFaction) => {
      this.text += i + ". Fraction name:" + receivedFaction.name + "\n"  + "Fraction rating:" + receivedFaction.rating + "\n" + "Fraction main person:" + receivedFaction.prisonerByMainPerson.personId + "\n\n";
      i++;
    });
  }
  bu2(){
    //todo выпадающий список?
    this.httpService.getSortedFraction()
      .subscribe(
        (data: Faction[]) => {
          this.receivedFactions = data;
          this.printer();
          this.done = true;
        },
        error => alert("Ну мы же попросили!")
      );
  }
  fullprinter(fraction : Faction){
    this.text="";
    let i : number = 0;
      this.text +="Fraction name: " + fraction.name + "\n"  + "Fraction rating: " + fraction.rating + "\n" + "Fraction main person: " + fraction.prisonerByMainPerson.personId + "\n" + "His rating: "+ fraction.prisonerByMainPerson.rating + "\n" + "His room: " + fraction.prisonerByMainPerson.roomsByRoom.id + "\nName of the room: " + fraction.prisonerByMainPerson.roomsByRoom.name
        + "\n" + "Members: \n";
      this.fraction.prisonersByName.forEach((smth) => {
        this.text += i + ". id: " + smth.personId + "\nRoom: " + smth.roomsByRoom.id + ", " + smth.roomsByRoom.name + "\n";
        i++;
      });
  }
  bu3(){
    this.httpService.getFractionByName(this.fraction)
      .subscribe((data: Faction) => {
        this.fraction = data;
        //alert(this.fraction);
        this.fullprinter(this.fraction);
        },
      error => alert("Нет такой!"))
  }
  bu4(){

  }


}
