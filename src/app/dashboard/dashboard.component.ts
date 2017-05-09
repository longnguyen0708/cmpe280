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
  itemsShoes: Item[] = [];
  itemsPhones: Item[] = [];
  itemsComputers: Item[] = [];
  itemsElectronics: Item[] = [];
  itemsHealth: Item[] = [];

  constructor(private itemService: ItemService) { }
  ngOnInit(): void {
    this.itemService.getItemsByCategory(items => {
      this.itemsClothing = items;
    }, 4, "Clothing");

    this.itemService.getItemsByCategory(items => {
      this.itemsShoes = items;
    }, 4, "Shoes");

    this.itemService.getItemsByCategory(items => {
      this.itemsPhones = items;
    }, 4, "Cell Phones");

    this.itemService.getItemsByCategory(items => {
      this.itemsComputers = items;
    }, 4, "Computers");

    this.itemService.getItemsByCategory(items => {
      this.itemsElectronics = items;
    }, 4, "Electronics");

    this.itemService.getItemsByCategory(items => {
      this.itemsHealth = items;
    }, 4, "Health Care");
  }
}
