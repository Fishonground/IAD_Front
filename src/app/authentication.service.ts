import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
//import {DataService} from './data.service';
//import {User} from '../_models';
//import * as http from "http";
import {pipe} from "rxjs";
import {User} from "./dbclasses/User";
import {Prisoner} from "./dbclasses/Prisoner";
import {Messages} from "./dbclasses/Messages";
import {HttpService} from "./http.service";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient, private httpService : HttpService) { }
  user : User = new User();
  loginto(user1 : User) {

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'});
    let options = { headers: headers };
    var body = 'username=' + user1.username + '&password=' + user1.password;

  //   return this.http.post<any>(http:localhost:8080/MultHubnew_war_exploded/resources/user/signIn, body{ username: username, password: password }, options)
  // .pipe(map(user => {
  //     console.log(user);
  //     if (user && user.login) {
  //       localStorage.setItem('currentUser', JSON.stringify(user));
  //       //this.data.rerender();
  //     }
  //     return user;
  //   }));
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Access-Control-Allow-Origin','*');
    const str = "username=I%27ve+done+it&password=123";
    return this.http.post('http://localhost:8080/login', body,  {headers:myHeaders, withCredentials: true})
      // .subscribe( (data1 : User) => {this.user=data1; this.httpService.getUserById('I\'ve done it').subscribe((data1 : User) =>
      // {localStorage.setItem('currentUser', JSON.stringify(data1));}), error => alert("SOme shit happened"));}),error =>
      .subscribe((data1 : User) => { this.httpService.getUserById(user1.username).subscribe( (data2 : string) => {localStorage.setItem('currentUser', JSON.stringify(data2))}, error => alert("Shit happens") )}, error1 => alert("Not found"))

    // this.httpService.getUserById().subscribe(getPrisonerById(this.prisoner).subscribe((data2: Prisoner) => {this.prisoner=data2;
    //     this.httpService.createnewmessage(this.message, this.prisoner,this.user,this.video)
    //       .subscribe(
    //         (data: Messages[]) => {
    //           this.receivedMessages = data;
    //           this.printer();
    //           this.done = true;
    //         },
    //         error => alert("Ну мы же попросили!")
    //       );}
    //   , error => alert('Prisoner not found'))},error => alert('User not found'))

    // pipe(map(user => {alert(user);
        //     localStorage.setItem('currentUser', JSON.stringify(user));
        //     //this.data.rerender();
        //   return user;}))


  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    //localStorage.removeItem('positions');
    //this.data.rerender();
  }
}
