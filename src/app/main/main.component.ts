import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [HttpService,AuthenticationService]
})
export class MainComponent implements OnInit {

  // to write date

  temp_date = new Date();
  how = this.temp_date.toDateString();
  thdate = this.how;

  //to rewtite the page information
  aboutasp = false;
  mainp=false;
  contactp=false;
  ddate = this.temp_date.getDate();

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.mainp = true;


  }
  logout(){
    this.auth.logout();
  }






}

