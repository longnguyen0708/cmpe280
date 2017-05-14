import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { ItemService } from '../service/item.service';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { SearchPipePipe } from './../search-pipe.pipe';

@Component({
  selector: 'my-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})


export class ItemsComponent  implements OnInit{
  
  items: Item[];
  selectedItem: Item;
  searchString: any;
  category: any;
  

  constructor(private itemService: ItemService, private router: Router, private activatedRoute: ActivatedRoute) { }//dependency injection

  ngOnInit(): void {
    this.getItems();
    
    this.activatedRoute.queryParams.subscribe((params: Params) => {
          let search = params['seach'];
          let cat1 = params['category'];
          this.searchString = search;
          this.category = cat1;
          console.log(this.searchString);
          console.log(this.category);
        });


  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  getItems(): void {
    this.itemService.getItems(items => this.items = items);
  }

  gotoDetail(id): void {
    this.router.navigate(['/detail', id]);
  }


}
