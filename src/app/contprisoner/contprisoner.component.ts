import { Component, OnInit } from '@angular/core';
import {People} from "../dbclasses/People";
import {HttpService} from "../http.service";
import {Prisoner} from "../dbclasses/Prisoner";
import {Messages} from "../dbclasses/Messages";
import {New} from "../dbclasses/New";
import {Video} from "../dbclasses/Video";
import {Faction} from "../dbclasses/Faction";

@Component({
  selector: 'app-contprisoner',
  templateUrl: './contprisoner.component.html',
  styleUrls: ['./contprisoner.component.css'],
  providers: [HttpService]
})
export class ContprisonerComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  newname  : string;
  newsurname  : string;
  newsecname : string;
  newgender : string;
  done: boolean = false;
  receivedMessages: Messages[]=[];
  receivedPrisoners: Prisoner[]=[];
  receivedPrisoner: Prisoner= new Prisoner();
  text:string ="";
  zid:number;
  nnn:string;
  nnt:string;
  frnn: string;
  nnvci:number;
  nnvd:string;
  nnvt:string;
  nnew : New = new New();
  nvid : Video = new Video();
  faction : Faction = new Faction();
  fack : Faction = new Faction();
  nfr : string;
  nfrn: string;
  prid : number;
  frnmp : number;
  ngOnInit() {
    localStorage.removeItem("currentPrisoner");
  }

  but0(){
    this.httpService.getAllPrisonerSorted()
      .subscribe(
        (data: Prisoner[]) => {
          this.receivedPrisoners = data;
          this.printer();
        },
        error => alert("Ну мы же попросили!")
      );
  }
  printer(){
    this.text="";
    let i : number = 0;
    this.receivedPrisoners.forEach((receivedPrisoner) => {
      //this.dat = receivedPrisoner.term.getDate();
      this.text += i + ". Person_Id: " + receivedPrisoner.personId + "\nRating: "+ receivedPrisoner.rating+"\nRoom: " + receivedPrisoner.roomsByRoom.id + ", " + receivedPrisoner.roomsByRoom.name+
        "\nFaction: " + receivedPrisoner.factionByFaction + "\nOwner: " + receivedPrisoner.ownerByUser + /*"\nTerm: " + this.dat+ */"\n";
      //todo time!!
      i++;
    });
  }
  but1(){
    this.httpService.getPrisonerById1(this.zid)
      .subscribe(
        (data: Prisoner) => {
          this.receivedPrisoner = data;
          localStorage.removeItem("currentPrisoner");
          localStorage.setItem('currentPrisoner', JSON.stringify(data))
          //this.printer();
        },
        error => alert("Ну мы же попросили!")
      );
  }
  but2(){

    this.httpService.updPersonsName(JSON.parse(localStorage.getItem("currentPrisoner")).personId, this.newname).subscribe(
      (data : People) => {alert("successful");JSON.parse(localStorage.getItem("currentPrisoner")).peopleByPeopleId.name = data.name}, error => alert('Mistake during changing name!')
    )

  }
  but3(){

    this.httpService.updPersonsSurName(JSON.parse(localStorage.getItem("currentPrisoner")).personId, this.newsurname).subscribe(
      (data : People) => {alert("successful");JSON.parse(localStorage.getItem("currentPrisoner")).peopleByPeopleId.surname = data.surname}, error => alert('Mistake during changing surname!')
    )

  }
  but4() {

    this.httpService.updPersonsSecName(JSON.parse(localStorage.getItem("currentPrisoner")).personId, this.newsecname).subscribe(
      (data : People) => {alert("successful");JSON.parse(localStorage.getItem("currentPrisoner")).peopleByPeopleId.secondName = data.secondName}, error => alert('Mistake during changing Secname!')
    )

  }
  but5(){
    this.httpService.updPersonsGender(JSON.parse(localStorage.getItem("currentPrisoner")).personId, this.newgender).subscribe(
      (data : People) => {alert("successful");JSON.parse(localStorage.getItem("currentPrisoner")).peopleByPeopleId.gender = data.gender}, error => alert('Mistake during changing gender!')
    )
  }
  but6(){
    this.nvid.camId=this.nnvci;
    this.nvid.description=this.nnvd;
    //this.nvid.time=this.nnvt;
    this.nnew.name=this.nnn;
    this.nnew.text=this.nnt;
    this.httpService.createnewvideo(this.nvid).subscribe(
      (data : Video) => {
        alert("successful");this.nnew.videosByVideo=data;
        this.httpService.createnewnews(this.nnew).subscribe(
          (data: New) => {alert("New was created");}, error => alert("Mistake in new creating!"))
      }, error => alert('Mistake during creating video!')
    )
  }
  but7(){
    this.httpService.getFractionByMain(JSON.parse(localStorage.getItem("currentPrisoner")).personId).subscribe(
      (data : Faction[]) => {
        //todo it strange
        this.fack = data[0];alert(this.fack.name);
        this.httpService.updFrName(this.fack.name,this.frnn).subscribe(
          (data: Faction) => {alert("NAme was created");}, error => alert("Mistake in chang name!"))
      }, error => alert('Mistake during receive your fraction!')
    )
  }
  but8(){
    this.httpService.getPrisonerById1(this.frnmp).subscribe((data : Prisoner)=>{this.httpService.updFrMain(JSON.parse(localStorage.getItem("currentPrisoner")).factionByFaction.name,data).subscribe((data: Faction)=>{alert('success')}, error => {alert('Error in main changing!')})},error => {alert("This prisoner doent't exist")});
    ;
  }
  but9(){
    this.httpService.getFractionByName1(this.nfr).subscribe((data : Faction) => {this.httpService.updPrisonerFaction(JSON.parse(localStorage.getItem("currentPrisoner")).personId,data).subscribe((data : Prisoner)=>{JSON.parse(localStorage.getItem("currentPrisoner")).factionByFaction=data.factionByFaction},
      error => alert("Changing faction mistake"));} , error => "This faction doesnt exist!");

  }
  but10(){
    this.httpService.getFractionByName1("Без фракции").subscribe((data : Faction) => {this.httpService.updPrisonerFaction(this.prid,data).subscribe((data : Prisoner)=>{JSON.parse(localStorage.getItem("currentPrisoner")).factionByFaction=data.factionByFaction},
      error => alert("Changing faction mistake"));} , error => "This faction doesnt exist!");

  }
  but11(){
    let nfract: Faction = new Faction();
    nfract.name = this.nfrn;
    nfract.prisonerByMainPerson = JSON.parse(localStorage.getItem("currentPrisoner"));
    nfract.rating = JSON.parse(localStorage.getItem("currentPrisoner")).rating ;
    //nfract.prisonersByName = JSON.parse(localStorage.getItem("currentPrisoner"));
    this.httpService.createnewfraction(nfract).subscribe((data: Faction) => {alert("success");this.httpService.updPrisonerFaction(JSON.parse(localStorage.getItem("currentPrisoner")),data);},error => alert("Error on creating fraction!"));

  }
  but12(){
    this.httpService.getAllMessageByReceiver(JSON.parse(localStorage.getItem("currentPrisoner")))
      .subscribe(
        (data: Messages[]) => {
          this.receivedMessages = data;
          this.mprinter();
          this.done = true;
        },
        error => alert("Ну мы же попросили!")
      );
  }
  mprinter(){
    this.text="";
    let i : number = 0;
    this.receivedMessages.forEach((receivedOrder) => {
      this.text += i + ". Message id: " + receivedOrder.id + "\n"  + "Receiver id: " + receivedOrder.prisonerByPrisoner.personId + "\n" + "Sender: "
        + receivedOrder.usersByUser.login + "\n" + "Text: " + receivedOrder.massege + "\n" + "Video url: " + receivedOrder.videosByVideo.description + "\n\n";
      i++;
    });
  }

}
