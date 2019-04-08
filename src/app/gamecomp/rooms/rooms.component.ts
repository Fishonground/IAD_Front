import { Component, OnInit } from '@angular/core';
import {Orders} from "../../dbclasses/Orders";
import {Room} from "../../dbclasses/Room";
import {HttpService} from "../../http.service";
import {HttpClient} from "@angular/common/http";
import {Prisoner} from "../../dbclasses/Prisoner";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [HttpService]
})
export class RoomsComponent implements OnInit {

  constructor(private httpService: HttpService, private http:HttpClient) { }

  ngOnInit() {
  }

  receivedRooms: Room[]=[]; // received news
  receivedPrisoners: Prisoner[] = [];
  done: boolean = false;
  text : string = "";
  room : Room =new Room;
  butt1(){

    this.httpService.getAllRoom()
      .subscribe(
        (data: Room[]) => {
          this.receivedRooms = data;
          this.printer();
          this.done = true;
        },
        error => alert("Ну мы же попросили!")
      );

  }
  printer(){
    this.text="";
    let i : number = 0;
    this.receivedRooms.forEach((receivedRoom) => {
      this.text += i + ". Room id: " + receivedRoom.id + ", " + receivedRoom.name + "\n" + "Number of prisoners: "
        + receivedRoom.numberOfPrisoners + "\n";
      i++;
    });
  }

  butt2(){
    this.text="";
    let i : number = 0;
    this.receivedRooms.forEach((receivedRoom) => {
      this.text += i + ". Room id: " + receivedRoom.id + ", " + receivedRoom.name + "\n" + "Number of prisoners: "
        + receivedRoom.numberOfPrisoners + "\n" + "Members: \n" ;
        this.httpService.getAllPrisonersByRoom(receivedRoom)
          .subscribe(
          (data: Prisoner[]) => {
            this.prprinter();
            this.receivedPrisoners = data;
            },
          error => this.text+="Empty room\n"
          );
      i++;
    });
  }

  prprinter(){
    let i : number = 0;
    this.receivedPrisoners.forEach((receivedPr) => {
      this.text += i + ". Person id: " + receivedPr.personId + ", rating: " + receivedPr.rating + "\n" + " Faction: "
        + receivedPr.factionByFaction + "\n" + " Room: " + receivedPr.roomsByRoom.id + ", " + receivedPr.roomsByRoom.name + "\n";
      i++;
    });
  }
  butt3(){
    this.httpService.getAllPrisonersByRoom(this.room)
      .subscribe(
        (data: Prisoner[]) => {
          this.receivedPrisoners = data;
          this.text="";
          this.prprinter();
          this.done = true;
        },
        error => this.text = "Пустая комната"
      );
  }
  butt4(){

  }
}
