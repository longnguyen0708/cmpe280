import { Injectable } from '@angular/core';
import { Item } from '../model/item';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ItemService {

  constructor(private firebase: AngularFire) {
  }

  getItems(cb) {
    var items = this.firebase.database.list('/items');
     items.subscribe(snapshots => {
       console.log("items", snapshots);
       cb(snapshots);
     })
  }

  getItem(id): FirebaseObjectObservable<any>{
    return this.firebase.database.object(`/items/${id}`);
   }

}
