import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Augth} from "./Augth";

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  //http://localhost:60489/Home/PostUser  ASP.NET MVC 5
  //http://localhost:8080/angular/setUser.php     PHP
  // http://localhost:60820/api/values        ASP NET Wep API 2
  postData(augth: Augth){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = {login: augth.login, password: augth.password};
    return this.http.post('http://localhost:8080/login', body, {headers:myHeaders});
  }
}
