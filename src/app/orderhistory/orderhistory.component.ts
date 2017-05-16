import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from '../service/orderhistory.service';
import { OrderHistoryItem } from '../model/OrderHistoryItem';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})

export class OrderHistoryComponent implements OnInit {
  orderItems: OrderHistoryItem[] = [];

  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit() {
    this.orderHistoryService.getOrderHistory(orderItems => {
      this.orderItems = orderItems;
      console.log("printing orders")
      console.log(orderItems)
    });
  }

}
