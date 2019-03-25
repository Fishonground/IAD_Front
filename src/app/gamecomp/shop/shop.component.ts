import { Component, OnInit } from '@angular/core';
import {Messages} from "../../dbclasses/Messages";
import {HttpService} from "../../http.service";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../dbclasses/Product";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [HttpService]
})
export class ShopComponent implements OnInit {

  constructor(private httpService: HttpService, private http:HttpClient) { }

  receivedProduct : Product[] = [];
  ngOnInit() {
  }
  button1(){
    this.httpService.getAllProduct()
      .subscribe(
        (data: Product[]) => {
          this.receivedProduct = data;
          //this.printer();
          },
        error => alert("Ну мы же попросили!")
      );
  }
}
