import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {New} from "../dbclasses/New";
import {error} from "selenium-webdriver";
import {User} from "../dbclasses/User";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [HttpService]
})
export class NewsComponent implements OnInit {

  constructor(private httpService: HttpService, private http:HttpClient){}
  user: User;
  ngOnInit() {
  }

  receivedNews: New[]=[]; // received news
  done: boolean = false;
  receivedUser: User;
  reload(){
    // this.httpService.loginto().subscribe(    (data: User) => {
    //   this.receivedUser=data; this.done=true;
    //
    //     // this.httpService.getNews()
    //     //   .subscribe(
    //     //     (data ) => {this.receivedNews=data["newList"];/*data => this.users=data["userList"];*/ this.done=true;},
    //     //     error => console.log(error)
    //     //   );
    //   },
    //   error => console.log(error)
    // );

    this.httpService.getNews()
      .subscribe(
        (data: New[] ) => {this.receivedNews=data; this.done=true;},
        error => alert("Ну мы же попросили!")
      );


  }



}
