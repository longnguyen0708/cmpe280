import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { CartItem } from '../model/cartItem';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class CartService {

  constructor(private firebase: AngularFire) {
  }

  getCartItems(cb, user_id) {
    var cartItems = this.firebase.database.list(`/cart/${user_id}`);
     cartItems.subscribe(snapshots => {
       console.log("cartItems", snapshots);
       cb(snapshots);
     })
  }

  addToCart(uid: string, item: Item) {
    console.log('addToCart', item.price, parseFloat(item.price.substr(1)))
    var cartItems = this.firebase.database.list(`/cart/${uid}`);
    let cartItem = new CartItem();
    cartItem.user_id =  uid;
    cartItem.item_id = item.id;
    cartItem.name = item.name;
    cartItem.imgUrl = item.imgUrl;
    cartItem.qty = 1;
    cartItem.unit_price = parseFloat(item.price.substr(1));

    cartItems.push(cartItem);
  }

}
