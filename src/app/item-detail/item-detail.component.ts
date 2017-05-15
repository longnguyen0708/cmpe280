import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'
import 'rxjs/add/operator/switchMap';

import { Item } from '../model/item';
import {ItemService} from '../service/item.service'
import {CartService} from '../service/cart.service'


@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: [ './item-detail.component.css' ]
})

export class ItemDetailComponent implements OnInit{
  @Input() item: Item;
  private uid: string;
  addToCartOK: boolean = false;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService
  ){}

  ngOnInit() : void {
    this.route.params
      .switchMap((params: Params) => this.itemService.getItem(+params['id']))
      .subscribe(item => {this.item = item});

      console.log('uid= ', localStorage.getItem('uid'));
      this.uid = localStorage.getItem('uid');
  }

  goBack(): void {
    this.location.back();
  }

  addToCart() {
    console.log('addToCart() uid', this.uid, 'item_id', this.item.id);
    this.cartService.addToCart(this.uid, this.item);
    this.popupAddToCartOK;
  }

  //please set the popup in html for this
  popupAddToCartOK() {
    console.log(this.uid, 'addToCartOK', this.item.id);
    this.addToCartOK = true;
  }
}
