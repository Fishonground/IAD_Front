import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
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

  constructor() { }

  ngOnInit() {
    this.mainp = true;
  }






}

