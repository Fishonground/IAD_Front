import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {HttpClient} from "@angular/common/http";
import {Orders} from "../../dbclasses/Orders";
import {Messages} from "../../dbclasses/Messages";
import {Prisoner} from "../../dbclasses/Prisoner";
import {User} from "../../dbclasses/User";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [HttpService]
})
export class MessagesComponent implements OnInit {

  constructor(private httpService: HttpService, private http:HttpClient) { }
  ngOnInit() {
  }
  receivedMessages: Messages[]=[]; // received news
  done: boolean = false;
  text : string = "";
  prisoner : Prisoner =new Prisoner;
  user : User = new User();
  message : Messages = new Messages;
  butto1(){
    this.httpService.getAllMessageByReceiver(this.prisoner)
      .subscribe(
        (data: Messages[]) => {
          this.receivedMessages = data;
          this.printer();
          this.done = true;
        },
        error => alert("Ну мы же попросили!")
      );
  }
  printer(){
    this.text="";
    let i : number = 0;
    this.receivedMessages.forEach((receivedOrder) => {
      this.text += i + ". Message id: " + receivedOrder.id + "\n"  + "Receiver id: " + receivedOrder.prisonerByPrisoner.personId + "\n" + "Sender: "
        + receivedOrder.usersByUser.login + "\n" + "Text: " + receivedOrder.massege + "\n" + "Video url: " + receivedOrder.videosByVideo.description + "\n\n";
      i++;
    });
  }
  butto2(){
    this.httpService.createnewmessage(this.message)
      .subscribe(
        (data: Messages[]) => {
          this.receivedMessages = data;
          this.printer();
          this.done = true;
        },
        error => alert("Ну мы же попросили!")
      );

  }
  butto3(){
    this.httpService.getAllMessageBySender(this.message)
      .subscribe(
        (data: Messages[]) => {
          this.receivedMessages = data;
          this.printer();
          this.done = true;
        },
        error => alert("Ну мы же попросили!")
      );
  }
}
