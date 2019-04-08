import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {People} from "../../dbclasses/People";
import {Messages} from "../../dbclasses/Messages";
import {User} from "../../dbclasses/User";
import {Prisoner} from "../../dbclasses/Prisoner";
import {Thing} from "../../dbclasses/Thing";
import {Room} from "../../dbclasses/Room";
import {Faction} from "../../dbclasses/Faction";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [HttpService]
})
export class UsersComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  person: People = new People();
  prisoner : Prisoner = new Prisoner();
  text : string = "";
  zk : number;
  newroom : number;
  newname  : string;
  newsurname  : string;
  newsecname : string;
  newgender : string;
  pr : Prisoner= new Prisoner;

  receivedUsers : User[]=[];
  receivedPrisoner : Prisoner[]=[];
  receivedThings : Thing[]=[];
  myPrisoner : number[] = [];
  newlogin : string = "";
  some : number;
  rooms : number[]=[371,
    369,
    368,
    367,
    365,
    361,
    359,
    372,
    373,
    300,
    301,
    375];
  ngOnInit() {
  }

  but1() {
    this.httpService.getSortedUsers()
      .subscribe(
        (data: User[]) => {
          this.receivedUsers = data;
          this.printer();
        },
        error => alert("Ну мы же попросили!")
      );
  }
  printer(){
    this.text="";
    let i : number = 0;
    this.receivedUsers.forEach((receivedOrder) => {
      this.text += i + ". Login: " + receivedOrder.login + "\n"  + "Person id: " + receivedOrder.peopleByPeopleId.id + "\n" + "Name: "
        + receivedOrder.peopleByPeopleId.name + "\n" + "Surname: " + receivedOrder.peopleByPeopleId.surname + "\n" + "Secondname: " + receivedOrder.peopleByPeopleId.secondName
        + "\nGender: " + receivedOrder.peopleByPeopleId.gender + "\n" + "Role: " + receivedOrder.usersStatusByStatus.name + "\n\n";
      i++;
    });
  }

  but2() {

  }

  but3() {
    if (this.myPrisoner.indexOf(this.some) != -1){
      this.httpService.getThingsById(this.some)
        .subscribe(
          (data:  Thing[]) => {
            this.receivedThings = data;
            this.thingsprinter();
          },
          error => alert("Ну мы же попросили!")
        );
    }
    //todo it with local storage may be?
    else alert("U haven't got ZK with this Id!");
  }
  thingsprinter(){
    this.text="";
    let i : number=0;
    this.receivedThings.forEach((smth) => {
      //localStorage.setItem("pr"+i,JSON.stringify(smth));
      //this.myPrisoner[i]=smth.personId;
      this.text += i + ". Name: " + smth.name + "\nDescription: " + smth.description + "\nPrice: " + smth.price+ "\n";
      i++;
    });
  }

  but4() {
    this.httpService.getPrisonersByUser()
      .subscribe(
        (data: Prisoner[]) => {
          this.receivedPrisoner = data;
          this.prisonerprinter();
        },
        error => alert("Ну мы же попросили!")
      );
  }
  prisonerprinter(){
    this.text="";
    let i : number=0;
    this.receivedPrisoner.forEach((smth) => {
      //localStorage.setItem("pr"+i,JSON.stringify(smth));
      this.myPrisoner[i]=smth.personId;
      this.text += i + ". id: " + smth.personId + "\nRoom: " + smth.roomsByRoom.id + ", " + smth.roomsByRoom.name + "\nRating: " + smth.rating + "\nFaction: " + smth.factionByFaction + "\n";
      i++;
    });
  }
  //todo JSON for prisoner for future work
  but5() {
    this.person.photo="/ph";
    this.prisoner.ownerByUser=JSON.parse(localStorage.getItem("currentUser"));
    this.prisoner.rating = Math.floor(Math.random() * 10);
    let ind : number = Math.floor(Math.random() * 12);
    this.httpService.getRoomById(ind).subscribe((data: Room)=>{this.prisoner.roomsByRoom=data;},error => alert('Smth mistake with room'));
    //todo check for free places
    this.httpService.getFractionByName1("Без фракции").subscribe((data: Faction)=>{this.prisoner.factionByFaction=data;},error => alert('Smth mistake with faction'));
    this.httpService.createnewperson(this.person)
      .subscribe((data: People) => {
        //alert(data.id);
        this.prisoner.personId=data.id;
        this.httpService.createNewPrisoner(this.prisoner).subscribe((data : Prisoner)=>{this.prisoner = data;},error => alert("Prisoner wasn't created!"))

      }, error => alert("Person wasnt created!"));

  }
  but6(){
    //todo why it doesn't work but others are?
    let us : User= new User;
    this.httpService.getUserById("liveincry").subscribe((data : User) => {us = data;this.httpService.updUsersLogin(/*JSON.parse(localStorage.getItem("currentUser")).login*/ us, this.newlogin).subscribe(
      (data : User) => {JSON.parse(localStorage.getItem("currentUser")).login = data.login}, error => alert('Mistake during changing login!')
    )}, error => alert("User not found!"))

  }
  but7(){
    ///
  }
  but8(){
    //if (this.myPrisoner.indexOf(this.zk) != -1){
      this.httpService.updPrisonerRoom(/*JSON.parse(localStorage.getItem("currentUser")).login*/ this.zk, this.newroom).subscribe(
        (data : Prisoner) => {alert("successful")}, error => alert('Mistake during changing room!')
      )
    //}
    //todo it with local storage may be?
    //else alert("U haven't got ZK with this Id! Or sm more mistake");
  }
  but9(){
    this.httpService.updPersonsName(JSON.parse(localStorage.getItem("currentUser")).peopleByPeopleId.id, this.newname).subscribe(
      (data : People) => {alert("successful");JSON.parse(localStorage.getItem("currentUser")).peopleByPeopleId.name = data.name}, error => alert('Mistake during changing name!')
    )
  }
  but10(){
    this.httpService.updPersonsSurName(JSON.parse(localStorage.getItem("currentUser")).peopleByPeopleId.id, this.newsurname).subscribe(
      (data : People) => {alert("successful");JSON.parse(localStorage.getItem("currentUser")).peopleByPeopleId.surname = data.surname}, error => alert('Mistake during changing surname!')
    )
  }
  but11(){
    this.httpService.updPersonsSecName(JSON.parse(localStorage.getItem("currentUser")).peopleByPeopleId.id, this.newsecname).subscribe(
      (data : People) => {alert("successful");JSON.parse(localStorage.getItem("currentUser")).peopleByPeopleId.secondName = data.secondName}, error => alert('Mistake during changing Secname!')
    )
  }
  but12(){
    this.httpService.updPersonsGender(JSON.parse(localStorage.getItem("currentUser")).peopleByPeopleId.id, this.newgender).subscribe(
      (data : People) => {alert("successful");JSON.parse(localStorage.getItem("currentUser")).peopleByPeopleId.gender = data.gender}, error => alert('Mistake during changing gender!')
    )
  }
}
