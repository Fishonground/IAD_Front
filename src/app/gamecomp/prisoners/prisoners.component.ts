import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {Orders} from "../../dbclasses/Orders";
import {Prisoner} from "../../dbclasses/Prisoner";
import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl";

@Component({
  selector: 'app-prisoners',
  templateUrl: './prisoners.component.html',
  styleUrls: ['./prisoners.component.css'],
  providers: [HttpService]
})
export class PrisonersComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }
  receivedPrisoners: Prisoner[]=[];
  text:string ="";
  fraction: string="";
  //dat : Date = new Date();
  but1(){
    this.httpService.getAllPrisoner()
      .subscribe(
        (data: Prisoner[]) => {
          this.receivedPrisoners = data;
          this.printer();
        },
        error => alert("Ну мы же попросили!")
      );

  }
  printer(){
    this.text="";
    let i : number = 0;
    this.receivedPrisoners.forEach((receivedPrisoner) => {
      //this.dat = receivedPrisoner.term.getDate();
      this.text += i + ". Person_Id: " + receivedPrisoner.personId + "\nRating: "+ receivedPrisoner.rating+"\nRoom: " + receivedPrisoner.roomsByRoom.id + ", " + receivedPrisoner.roomsByRoom.name+
      "\nFaction: " + receivedPrisoner.factionByFaction + "\nOwner: " + receivedPrisoner.usersByOwner.login + /*"\nTerm: " + this.dat+ */"\n";
      //todo time!!
      i++;
    });
  }
  but2(){

  }
  but3(){
    this.httpService.getPrisonerByFraction(this.fraction)
      .subscribe(
        (data: Prisoner[]) => {
          this.receivedPrisoners = data;
          this.printer();
        },
        error => alert("Ну мы же попросили!")
      );
  }
}
