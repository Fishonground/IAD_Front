import { Component, OnInit } from '@angular/core';
import {Messages} from "../../dbclasses/Messages";
import {HttpService} from "../../http.service";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../dbclasses/Product";
import {People} from "../../dbclasses/People";
import {Prisoner} from "../../dbclasses/Prisoner";
import {Orders} from "../../dbclasses/Orders";
import {Order_conditions} from "../../dbclasses/Order_conditions";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [HttpService]
})
export class ShopComponent implements OnInit {

  constructor(private httpService: HttpService, private http:HttpClient) { }

  text:string="";
  toz: number;
  forz : string;
  howz : number;
  prn: string;
  prpr: number;
  prc : number;
  pra : number;
  ord: number;
  ordcond:number;
  order : Orders = new Orders();
  receivedProducts : Product[] = [];
  product : Product = new Product();
  ngOnInit() {
  }
  but1(){
    this.httpService.getAllProduct()
      .subscribe(
        (data: Product[]) => {
          this.receivedProducts = data;
          this.printer();
          },
        error => alert("Ну мы же попросили!")
      );
  }

  printer(){
    this.text="";
    let i : number = 0;
    this.receivedProducts.forEach((receivedOrder) => {
      this.text += i + ". Name: " + receivedOrder.name + "\n"  + "Aughtority: " + receivedOrder.authority + "\n" + "Count: "
        + receivedOrder.count + "\n" + "Price: " + receivedOrder.price + "\n";
      i++;
    });
  }
  but2(){



  }
  but3(){
    this.httpService.getProductById(this.forz)
      .subscribe((data: Product) => {
        //alert(data.id);
        this.order.productByProduct = data;
        this.httpService.createneworder(data, this.toz).subscribe((data : Orders)=>{this.order = data;},error => alert("Order wasn't created!"))

      }, error => alert("Order wasnt created! Nu vashe"));

  }
  but4(){
        this.product.name = this.prn;
        this.product.count = this.prc;
        this.product.authority=this.pra;
    this.product.price=this.prpr;
        this.httpService.createnewproduct(this.product).subscribe((data : Product)=>{this.product = data;},error => alert("Product wasn't created!"))

  }
  but5(){
    this.httpService.getOrdCondById(this.ordcond)
      .subscribe((data: Order_conditions) => {
        //alert(data.id);
        this.httpService.updOrdCond(this.ord, data).subscribe((data : Orders)=>{this.order = data;},error => alert("Order Cond wasn't chenged!"))

      }, error => alert("Order wasnt found!"));

  }
  but6(){

  }
  but7(){

  }
}
