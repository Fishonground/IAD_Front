import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {HttpClient} from "@angular/common/http";
import {Orders} from "../../dbclasses/Orders";
import {Messages} from "../../dbclasses/Messages";
import {Prisoner} from "../../dbclasses/Prisoner";
import {User} from "../../dbclasses/User";
import {Video} from "../../dbclasses/Video";
import {AuthenticationService} from "../../authentication.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [HttpService, AuthenticationService]
})
export class MessagesComponent implements OnInit {

  constructor(private httpService: HttpService, private http:HttpClient, private auth: AuthenticationService) { }
  ngOnInit() {
  }
  receivedMessages: Messages[]=[]; // received news
  receivedUser : User;
  done: boolean = false;
  text : string = "";
  prisoner : Prisoner =new Prisoner;
  prisoner1 : Prisoner = new Prisoner;
  user : User = new User;
  user1: User = new User;
  video : Video = new Video;
  message : Messages = new Messages;

  butto1(){
    this.httpService.getAllMessageByReceiver(this.prisoner1)
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
    //alert(this.user1.login);
    //this.httpService.getVideoById()
    this.httpService.getPrisonerById(this.prisoner).subscribe((data2: Prisoner) => {this.prisoner=data2;
        this.httpService.createnewmessage(this.message, this.prisoner,this.user,this.video)
          .subscribe(
            (data: Messages[]) => {
              this.receivedMessages = data;
              //this.printer();
              this.done = true;
            },
            error => alert("Ну епта!")
          );}
     , error => alert('Prisoner not found'))



  }
  butto3(){
    this.httpService.getAllMessageBySender(this.user1)
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
