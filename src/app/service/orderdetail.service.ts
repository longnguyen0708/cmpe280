import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from '../service/auth.service';

@Injectable()
export class OrderDetailService {

  constructor(private firebase: AngularFire, private authService: AuthService) {
  }

  getOrderDetails(cb) {
    var userid = this.authService.getuserid();
    var orderDetailItems = this.firebase.database.list(`/orderdetails/${userid}`);
     orderDetailItems.subscribe(snapshots => {
       console.log("orderDetails", snapshots);
       cb(snapshots);
     })
  }

}
