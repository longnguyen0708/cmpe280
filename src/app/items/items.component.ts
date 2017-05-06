import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { ItemService } from '../service/item.service';
import { Router } from '@angular/router'

@Component({
  selector: 'my-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})


export class ItemsComponent  implements OnInit{
  items: Item[];
  selectedItem: Item;

  constructor(private itemService: ItemService, private router: Router) { }//dependency injection

  ngOnInit(): void {
    this.getItems();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  getItems(): void {
    this.itemService.getItems(items => this.items = items);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedItem.id]);
  }

}
