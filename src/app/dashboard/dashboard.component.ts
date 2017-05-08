import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  itemsClothing: Item[] = [];
  myItem: Item = {id: 1,
        category: "dfsd",
        name: "Long",
        imgUrl: "assets/4.jpg"};
  constructor(private itemService: ItemService) { }
  ngOnInit(): void {
    this.itemService.getItemsByCategory(items => {
      this.itemsClothing = items;
      this.myItem = this.itemsClothing[0];
      console.log("myItem", this.myItem);
    }, 4, "Clothing");
  }
}
