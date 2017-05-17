import { Injectable } from '@angular/core';
import { Item } from '../model/item';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ItemService {

  constructor(private db: AngularFireDatabase) {
  }

  getItems(cb) {
    var items = this.db.list('/items');
     items.subscribe(snapshots => {
       console.log("items", snapshots);
       cb(snapshots);
     })
  }

  getItem(id): FirebaseObjectObservable<any>{
    return this.db.object(`/items/${id}`);
   }

   getItemsByCategory(cb, limit, category) {
     var items = this.db.list('/items', {
       query: {
         limitToFirst: limit,
         orderByChild: 'category',
         equalTo: category,
       }
     })
     items.subscribe(snapshots => {
       console.log("getItemsByCategory", snapshots);
       cb(snapshots);
     })
   }
}
