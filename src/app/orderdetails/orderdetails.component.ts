import { Component, OnInit } from '@angular/core';
import { OrderDetailItem } from '../model/OrderDetailItem';
import { OrderDetailService } from '../service/orderdetail.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderItems: OrderDetailItem[] = [];

  constructor(private orderdetailService: OrderDetailService) { }

  ngOnInit() {
    this.orderdetailService.getOrderDetails(orderItems => {
      this.orderItems = orderItems;
      console.log("printing orders")
      console.log(orderItems)
    });
  }

}
