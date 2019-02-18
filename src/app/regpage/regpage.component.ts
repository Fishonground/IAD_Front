import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css']
})
export class RegpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
/*import {Component, OnInit} from '@angular/core';
import { HttpService} from '../http.service';
import {Augth} from "../Augth";


@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css'],
  providers: [HttpService]
})
export class RegpageComponent implements OnInit{

  ngOnInit(){alert("hj")}

  augth: Augth=new Augth(); // данные вводимого пользователя

  receivedAugth: Augth; // полученный пользователь
  done: boolean = false;
  constructor(private httpService: HttpService){}
  submit(augth: Augth){
    this.httpService.postData(augth)
      .subscribe(
        (data: Augth) => {this.receivedAugth=data; this.done=true;},
        error => console.log(error)
      );
  }
}
*/
