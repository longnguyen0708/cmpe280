import { Injectable } from '@angular/core';
import { Item } from '../model/item';

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

}
