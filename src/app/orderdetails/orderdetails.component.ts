import { Component, OnInit } from '@angular/core';
import { OrderDetailItem } from '../model/OrderDetailItem';
import { OrderDetailService } from '../service/orderdetail.service';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderItems: OrderDetailItem[] = [];

  constructor(private orderdetailService: OrderDetailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let order_id = params['id'];
      console.log('OrderDetailComponent', order_id);
      this.orderdetailService.getOrderDetails(order_id, orderItems => {
        this.orderItems = orderItems;
        console.log("printing orders")
        console.log(orderItems)
      });
    })
  }

}
