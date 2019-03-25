import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpClientModule} from '@angular/common/http';
import {User} from './dbclasses/User';
import {People} from "./dbclasses/People";
import {Faction} from "./dbclasses/Faction";
import {Orders} from "./dbclasses/Orders";
import {Room} from "./dbclasses/Room";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";
import {Messages} from "./dbclasses/Messages";
import {Prisoner} from "./dbclasses/Prisoner";

/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};*/


@Injectable()
export class HttpService{
  peopleid : number = 8;
  constructor(private http: HttpClient){ }

  //registration
  curuser : User;
  postData(user: User){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Access-Control-Allow-Origin','*');
    //const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    //const body = { username: JSON.stringify(user.username).toString(), password: JSON.stringify(user.password)};
    const body = { username: user.username, password: user.password};
    //JSON.stringify(body.valueOf());
    //JSON.stringify(body);
    //const params = new HttpParams().set('username', body.username).set('password' , body.password);
    //$2a$10$/FNBIXbY9ci1gE/FUDs51.d/6mOKNnLhvL2tRkgmXhIkKpLXQSlyu
    //JSON.parse(body);
    this.curuser = user;
    this.curuser.login = "I've done it";
    const str = "username=I%27ve+done+it&password=123";
    //^[^\`\\\}\{\^}][A-zА-я]{6,12}$
    return this.http.post('http://localhost:8080/login', str,  {headers:myHeaders, withCredentials:true});
  }
  loginto(){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Access-Control-Allow-Origin','*');
    const str = "username=I%27ve+done+it&password=123";
    return this.http.post('http://localhost:8080/login', str,  {headers:myHeaders, withCredentials: true});
  }

  //orders

  getAllOrder(){
    return this.http.get('http://localhost:8080/api/orders/all',{withCredentials: true});
  }

  getOrderById(order : Orders){
    return this.http.get('http://localhost:8080/api/orders/zk/' + order.addresseeId,{withCredentials: true});
  }

  getOrderByCustomer(order : Orders){
    return this.http.get('http://localhost:8080/api/orders/cust/' + order.usersByCustomer.login,{withCredentials: true});
  }

  //messages

  createnewmessage(crmes : Messages){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const str = {id : crmes.id , massege : crmes.massege,  prisonerByPrisoner : crmes.prisonerByPrisoner, usersByUser : this.curuser, videosByVideo : crmes.videosByVideo};
    return this.http.post('http://localhost:8080/api/messages', str, {headers:myHeaders, withCredentials: true});

  }
  getAllMessageByReceiver(prisoner : Prisoner){
    return this.http.get('http://localhost:8080/api/messages/allr/' + prisoner.personId,{withCredentials: true});
  }

  getAllMessageBySender(message : Messages){
    return this.http.get('http://localhost:8080/api/messages/alls/' + message.usersByUser.login,{withCredentials: true});
  }

  //shop
  getAllProduct(){
    return this.http.get('http://localhost:8080/api/rooms/all',{withCredentials: true});
  }

  getSortedProduct(){
    return this.http.get('http://localhost:8080/api/rooms/all',{withCredentials: true});
  }


  //rooms

  getAllRoom(){
    return this.http.get('http://localhost:8080/api/rooms/all',{withCredentials: true});
  }

  getAllPrisonersByRoom(room : Room){
    //const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*').set('Access-Control-Allow-Methods','POST').set('Access-Control-Allow-Headers','Origin');
    return this.http.get('http://localhost:8080/api/prisoner/r/' + room.id,{/*headers: myHeaders ,*/ withCredentials: true});
  }


  //news

  getNews(){
    return this.http.get('http://localhost:8080/api/news/all',{withCredentials: true});

  }

  //fraction

  getAllFraction(){
    return this.http.get('http://localhost:8080/api/fraction/all',{withCredentials: true});
  }

  getFractionByName(fraction: Faction){
    return this.http.get('http://localhost:8080/api/fraction/' + fraction.name,{withCredentials: true});
  }
  getSortedFraction(){
    return this.http.get('http://localhost:8080/api/fraction/sorted' ,{withCredentials: true});
  }

  // user, person & prisoner

  //todo check for every request 401 error
  createnewperson(crpeople : People){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const str = {id : this.peopleid , name : crpeople.name , surname : crpeople.surname, second_name: crpeople.second_name , date_of_birth: crpeople.date_of_birth, gender:crpeople.gender, photo: "./ph"};
   return this.http.post('http://localhost:8080/api/people', str, {headers:myHeaders, withCredentials: true});

  }
  //todo id +++
  createnewuser(crpeople : People, cruser : User){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const str2 = {
      password: cruser.password,
      login: cruser.username,
      usersStatusByStatus: {
        id: 10
      },
      peopleByPeopleId: {
        id: this.peopleid
      }
    };
    return this.http.post('http://localhost:8080/api/users', str2, {headers:myHeaders, withCredentials: true})
  }


}
