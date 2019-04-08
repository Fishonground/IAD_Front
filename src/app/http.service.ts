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
import {Video} from "./dbclasses/Video";
import {Product} from "./dbclasses/Product";
import {Order_conditions} from "./dbclasses/Order_conditions";
import {New} from "./dbclasses/New";

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
  curuser : User = new User();
  // postData(user: User){
  //   const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Access-Control-Allow-Origin','*');
  //   //const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  //   //const body = { username: JSON.stringify(user.username).toString(), password: JSON.stringify(user.password)};
  //   const body = { username: user.username, password: user.password};
  //   //JSON.stringify(body.valueOf());
  //   //JSON.stringify(body);
  //   //const params = new HttpParams().set('username', body.username).set('password' , body.password);
  //   //$2a$10$/FNBIXbY9ci1gE/FUDs51.d/6mOKNnLhvL2tRkgmXhIkKpLXQSlyu
  //   //JSON.parse(body);
  //   this.curuser = user;
  //   this.curuser.login = "fishonground";
  //   alert(this.curuser.login);
  //   //localStorage.setItem(curUser, )localStorage.getItem()
  //   const str = "username=I%27ve+done+it&password=123";
  //   //this.http.get('http://localhost:8080/api/users/' + this.curuser.login ,{withCredentials: true});
  //
  //   //^[^\`\\\}\{\^}][A-zА-я]{6,12}$
  //   return this.http.post('http://localhost:8080/login', str,  {headers:myHeaders, withCredentials:true});
  // }

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
    return this.http.get('http://localhost:8080/api/orders/cust/' + JSON.parse(localStorage.getItem("currentUser")).login,{withCredentials: true});
  }

  //messages

  createnewmessage(crmes : Messages, prisoner : Prisoner, user : User, video: Video){
    //alert(JSON.parse(localStorage.getItem("currentUser")).login);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const str = {massege : crmes.massege,  prisonerByPrisoner: prisoner, usersByUser: JSON.parse(localStorage.getItem("currentUser")), videosByVideo : video};
    return this.http.post('http://localhost:8080/api/messages', str, {headers:myHeaders, withCredentials: true});

  }
  getAllMessageByReceiver(prisoner : Prisoner){
    return this.http.get('http://localhost:8080/api/messages/allr/' + prisoner.personId,{withCredentials: true});
  }

  getAllMessageBySender(user : User){
    return this.http.get('http://localhost:8080/api/messages/alls/' + user.login,{withCredentials: true});
  }

  //shop
  updOrdCond(id : number, ncond : Order_conditions){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.put('http://localhost:8080/api/orders/' + id + '/upd/conditions' , ncond,{headers:myHeaders,withCredentials: true});
  }

  getAllProduct(){
    return this.http.get('http://localhost:8080/api/product/all',{withCredentials: true});
  }

  createneworder(product : Product, adr :number){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const str = {productByProduct: product ,  usersByCustomer: JSON.parse(localStorage.getItem("currentUser")), addresseeId: adr, orderConditionsByCondition : {id: 0, description: "Ждет обратботки"}};
    return this.http.post('http://localhost:8080/api/orders', str, {headers:myHeaders, withCredentials: true});
  }
  createnewproduct(product : Product){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    //const str = {productByProduct: product ,  usersByCustomer: JSON.parse(localStorage.getItem("currentUser")), addresseeId: adr, orderConditionsByCondition : {id: 0, description: "Ждет обратботки"}};
    return this.http.post('http://localhost:8080/api/product', product, {headers:myHeaders, withCredentials: true});
  }

  getSortedProduct(){
    return this.http.get('http://localhost:8080/api/rooms/all',{withCredentials: true});
  }
   getProductById(id : string){
     return this.http.get('http://localhost:8080/api/product/' + id, {withCredentials: true});
   }
  getOrdCondById(id : number){
    return this.http.get('http://localhost:8080/api/orderconditions/' + id, {withCredentials: true});
  }

  //rooms

  getAllRoom(){
    return this.http.get('http://localhost:8080/api/rooms/all',{withCredentials: true});
  }

  getAllPrisonersByRoom(room : Room){
    //const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*').set('Access-Control-Allow-Methods','POST').set('Access-Control-Allow-Headers','Origin');
    return this.http.get('http://localhost:8080/api/prisoner/r/' + room.id,{/*headers: myHeaders ,*/ withCredentials: true});
  }

  getRoomById(id : number){
    return this.http.get('http://localhost:8080/api/rooms/' + id,{withCredentials: true});
  }

  //news

  getNews(){
    return this.http.get('http://localhost:8080/api/news/all',{withCredentials: true});

  }
  createnewnews(n : New){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.post('http://localhost:8080/api/news', n, {headers:myHeaders, withCredentials: true});
  }

  createnewvideo(n : Video){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.post('http://localhost:8080/api/videos', n, {headers:myHeaders, withCredentials: true});
  }


  //fraction

  getAllFraction(){
    return this.http.get('http://localhost:8080/api/fraction/all',{withCredentials: true});
  }

  getFractionByName(fraction: Faction){
    return this.http.get('http://localhost:8080/api/fraction/' + fraction.name,{withCredentials: true});
  }
  getFractionByMain(pr : number){
    return this.http.get('http://localhost:8080/api/fraction/by/' + pr,{withCredentials: true});
  }
  getFractionByName1(fr : string){
    return this.http.get('http://localhost:8080/api/fraction/' +  fr,{withCredentials: true});
  }
  getSortedFraction(){
    return this.http.get('http://localhost:8080/api/fraction/sorted' ,{withCredentials: true});
  }
  updFrName(pid : string,nn : string){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.put('http://localhost:8080/api/fraction/' + pid + '/upd/name/' + nn,JSON.parse(localStorage.getItem("currentUser")),{headers:myHeaders,withCredentials: true});
  }
  updFrMain(pid : string, people : Prisoner){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.put('http://localhost:8080/api/fraction/' + pid + '/upd/main/', people,{headers:myHeaders,withCredentials: true});

  }
  createnewfraction(n : Faction){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.post('http://localhost:8080/api/fraction', n, {headers:myHeaders, withCredentials: true});
  }


  //things

  getThingsById(prid : number){
    return this.http.get('http://localhost:8080/api/things/pr/' + prid,{withCredentials: true});
  }

  // user, person & prisoner

  updPersonsName(pid : number, nname: string){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.put('http://localhost:8080/api/people/' + pid + '/upd/name/' + nname,JSON.parse(localStorage.getItem("currentUser")),{headers:myHeaders,withCredentials: true});
  }

  updPersonsSurName(pid : number, nname: string){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.put('http://localhost:8080/api/people/' + pid + '/upd/surname/' + nname,JSON.parse(localStorage.getItem("currentUser")),{headers:myHeaders,withCredentials: true});
  }

  updPersonsSecName(pid : number, nname: string){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.put('http://localhost:8080/api/people/' + pid + '/upd/secname/' + nname,JSON.parse(localStorage.getItem("currentUser")),{headers:myHeaders,withCredentials: true});
  }

  updPersonsGender(pid : number, nname: string){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.put('http://localhost:8080/api/people/' + pid + '/upd/gender/' + nname,JSON.parse(localStorage.getItem("currentUser")),{headers:myHeaders,withCredentials: true});
  }

  updPrisonerRoom(pid : number, nname: number){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.put('http://localhost:8080/api/prisoner/' + pid + '/upd/room/' + nname,JSON.parse(localStorage.getItem("currentUser")),{headers:myHeaders,withCredentials: true});
  }
  updPrisonerFaction(pid : number, nn: Faction){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.put('http://localhost:8080/api/prisoner/' + pid + '/upd/faction',nn,{headers:myHeaders,withCredentials: true});
  }
  updPrisonerRating(pid : number, nname: number){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.put('http://localhost:8080/api/prisoner/' + pid + '/upd/rating/' + nname,JSON.parse(localStorage.getItem("currentUser")),{headers:myHeaders,withCredentials: true});
  }

  updUsersLogin(us : User, nname: string){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.put('http://localhost:8080/api/users/upd/login/' + nname, us /*JSON.parse(localStorage.getItem("currentUser"))*/,{headers:myHeaders,withCredentials: true});
  }



  getSortedUsers(){ //todo sort by rating
    return this.http.get('http://localhost:8080/api/users/sorted',{withCredentials: true});
  }

  getPrisonersByUser(){
    return this.http.get('http://localhost:8080/api/prisoner/bu/' + JSON.parse(localStorage.getItem("currentUser")).login,{withCredentials: true});
  }

  createNewPrisoner(prisoner : Prisoner){ //nr
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.post('http://localhost:8080/api/prisoner', prisoner, {headers:myHeaders, withCredentials: true});
  }
  getAllPrisonerSorted(){
    return this.http.get('http://localhost:8080/api/prisoner/allsort',{withCredentials: true});
  }
  getAllPrisoner(){
    return this.http.get('http://localhost:8080/api/prisoner/all',{withCredentials: true});
  }
  getPrisonerByFraction(frname : string){
    return this.http.get('http://localhost:8080/api/prisoner/fr/' + frname,{withCredentials: true});
  }
  getUserById(login : string){
    //alert(this.curuser.login);
    return this.http.get('http://localhost:8080/api/users/' + login ,{withCredentials: true});
  }

  getPrisonerById(prisoner : Prisoner){
    return this.http.get('http://localhost:8080/api/prisoner/' + prisoner.personId ,{withCredentials: true});
  }

  getPrisonerById1(personId : number){
    return this.http.get('http://localhost:8080/api/prisoner/' + personId ,{withCredentials: true});
  }

  //todo check for every request 401 error
  createnewperson(crpeople : People){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const str = {name : crpeople.name , surname : crpeople.surname, secondName: crpeople.secondName , dateOfBirth: crpeople.dateOfBirth, gender:crpeople.gender, photo: "./ph"};
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
      peopleByPeopleId: cruser.peopleByPeopleId
    };
    return this.http.post('http://localhost:8080/api/users', str2, {headers:myHeaders, withCredentials: true})
  }


}
