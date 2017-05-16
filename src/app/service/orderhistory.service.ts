import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from '../service/auth.service';

@Injectable()
export class OrderHistoryService {

  constructor(private firebase: AngularFire, private authService: AuthService) {
  }

  getOrderHistory(cb) {
    var userid = this.authService.getuserid();
    var orderHistoryItems = this.firebase.database.list(`/orders/${userid}`);
     orderHistoryItems.subscribe(snapshots => {
       console.log("orderHistory", snapshots);
       cb(snapshots);
     })
  }

}
