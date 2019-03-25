import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {HttpClient} from "@angular/common/http";
import {Faction} from "../../dbclasses/Faction";
import {Orders} from "../../dbclasses/Orders";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [HttpService]
})
export class OrdersComponent implements OnInit {

  constructor(private httpService: HttpService, private http:HttpClient) { }

  ngOnInit() {
  }
  receivedOrders: Orders[]=[]; // received news
  done: boolean = false;
  text : string = "";
  order : Orders =new Orders;
  order1 : Orders = new Orders;
  but1(){

    this.httpService.getAllOrder()
      .subscribe(
        (data: Orders[]) => {
          this.receivedOrders = data;
          this.printer();
          this.done = true;
        },
        error => alert("Ну мы же попросили!")
      );

  }
  printer(){
    this.text="";
    let i : number = 0;
    this.receivedOrders.forEach((receivedOrder) => {
      this.text += i + ". Order id: " + receivedOrder.id + "\n"  + "Receiver: " + receivedOrder.addresseeId + "\n" + "Customer: "
        + receivedOrder.usersByCustomer.login + "\n" + "Product: " + receivedOrder.productByProduct.name + "\n" + "Condition: " + receivedOrder.orderConditionsByCondition.description + "\n\n";
      i++;
    });
  }
  but2(){

  }
  // fullprinter(fraction : Faction){
  //   this.text="";
  //   let i : number = 0;
  //   this.text +="Fraction name: " + fraction.name + "\n"  + "Fraction rating: " + fraction.rating + "\n" + "Fraction main person: "
  //     + fraction.prisonerByMainPerson.personId + "\n" + "His rating: "+ fraction.prisonerByMainPerson.rating + "\n" + "His room: "
  //     + fraction.prisonerByMainPerson.roomsByRoom.id + "\nName of the room: " + fraction.prisonerByMainPerson.roomsByRoom.name
  //     + "\n" + "Members: \n";
  //   this.fraction.prisonersByName.forEach((smth) => {
  //     this.text += i + ". id: " + smth.personId + "\nRoom: " + smth.roomsByRoom.id + ", " + smth.roomsByRoom.name + "\n";
  //     i++;
  //   });
  // }
  but3(){
    this.httpService.getOrderById(this.order)
      .subscribe((data: Orders[]) => {
          this.receivedOrders = data;
          //alert(this.fraction);
          this.printer();
        },
        error => alert("Нет такой!"))

    }
  but4(){

    this.httpService.getOrderByCustomer(this.order1)
      .subscribe((data: Orders[]) => {
          this.receivedOrders = data;
          //alert(this.fraction);
          this.printer();
        },
        error => alert("Нет такой!"))

  }
  but5(){

  }


}
