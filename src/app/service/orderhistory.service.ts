import { Injectable } from '@angular/core';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../service/auth.service';

@Injectable()
export class OrderHistoryService {

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
  }

  getOrderHistory(cb) {
    var userid = localStorage.getItem('uid');//this.authService.getuserid();
    var orderHistoryItems = this.db.list(`/orders/${userid}`);
     orderHistoryItems.subscribe(snapshots => {
       console.log("orderHistory", snapshots);
       cb(snapshots);
     })
  }

}
