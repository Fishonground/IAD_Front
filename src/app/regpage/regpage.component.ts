
import { Component, OnInit} from '@angular/core';
import { HttpService} from '../http.service';
import {User} from '../dbclasses/User';
import {People} from "../dbclasses/People";

@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css'],
  providers: [HttpService]
})
export class RegpageComponent implements OnInit{
  authpage: boolean ;
  regpage : boolean ;
  ngOnInit(){
    this.authpage = true;
    this.regpage = false;
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
  cruser: User = new User();
  crpeople: People  = new People();
  receivedUser: User; // полученный пользователь
  done: boolean = false;
  auth: boolean = false;
  constructor(private httpService: HttpService){}

  submit(user: User){
    this.httpService.postData(user)
      .subscribe(
        (data: User) => {this.receivedUser=data; this.done=true; this.auth=true;// todo redirect to previous page
           }  ,
        error => {console.log(error); alert("INCORRECT!!")}
      );
  }

  registrate(){
    this.regpage=!this.regpage;
    this.authpage=!this.authpage;
  }

  createnew(cruser: User , crpeople : People){
    this.httpService.createnewperson(crpeople)
      .subscribe( (data: User) => {

        this.httpService.createnewuser(crpeople,cruser)
          .subscribe( (data: User) => {} , error=> {alert("A chto-to poshlo ne tak v usere");})


      } , error=> {alert("A chto-to poshlo ne tak");})
  }
}
