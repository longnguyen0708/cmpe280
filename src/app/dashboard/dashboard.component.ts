import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  items: Item[] = [];
  constructor(private itemService: ItemService) { }
  ngOnInit(): void {
    this.itemService.getItems(items => this.items = items.slice(1, 5));
  }
}
