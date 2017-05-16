import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { CartItem } from '../model/cartItem';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class CartService {

  constructor(private db: AngularFireDatabase) {
  }

  getCart(uid) : FirebaseListObservable<CartItem[]>{
    return this.db.list(`/cart/${uid}`);
  }

  addToCart(uid: string, item: Item) {
    console.log('addToCart', item.price, parseFloat(item.price.substr(1)))
    let existingItem = this.db.list(`/cart/${uid}`, {
      query: {
        limitToFirst: 1,
        orderByChild: 'item_id',
        equalTo: item.id,
      }
    });
    let objectSubscription = existingItem.subscribe(items => {
      console.log('exisintItem', items);
      objectSubscription.unsubscribe();
      var cartItems = this.db.list(`/cart/${uid}`);
      if (items.length == 0) {
        let cartItem = new CartItem();
        cartItem.user_id =  uid;
        cartItem.item_id = item.id;
        cartItem.name = item.name;
        cartItem.imgUrl = item.imgUrl;
        cartItem.qty = 1;
        cartItem.unit_price = parseFloat(item.price.substr(1));

        cartItems.push(cartItem);
      } else {
        cartItems.update(items[0].$key, {qty: items[0].qty + 1})
      }
    })


  }

}
