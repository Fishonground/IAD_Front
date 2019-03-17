/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css']
})
export class RegpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
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
import { Component, OnInit} from '@angular/core';
import { HttpService} from '../http.service';
import {User} from '../dbclasses/User';

@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css'],
  providers: [HttpService]
})
export class RegpageComponent implements OnInit{
  ngOnInit(){

  }

  //todo Login validation
  /*check(string pass){
    var Reg62 = new RegExp("^[^\`\\\}\{\^}][A-zА-я]{6,16}$"); //2

    if(pass1!='')
      {
        if(Reg62.test(pass1))
        {
          //alert('Тест пройден.');
          $('#username').text("Тест пройден.");
        }
        else
        {
          //alert('Тест не пройден.');
          $('#password').text("Тест не пройден.");
        }
      }
    });
  }*/

  user: User=new User(); // данные вводимого пользователя

  receivedUser: User; // полученный пользователь
  done: boolean = false;
  constructor(private httpService: HttpService){}
  submit(user: User){
    this.httpService.postData(user)
      .subscribe(
        (data: User) => {this.receivedUser=data; this.done=true; // todo redirect to previous page
           }  ,
        error => {console.log(error); alert("INCORRECT!!")}
      );
  }
}
