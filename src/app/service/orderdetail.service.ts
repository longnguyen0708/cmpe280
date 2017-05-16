import { Injectable } from '@angular/core';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../service/auth.service';

@Injectable()
export class OrderDetailService {

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
  }

  getOrderDetails(cb) {
    var userid = localStorage.getItem('uid');//this.authService.getuserid();
    var orderDetailItems = this.db.list(`/orderdetails/${userid}`);
     orderDetailItems.subscribe(snapshots => {
       console.log("orderDetails", snapshots);
       cb(snapshots);
     })
  }

}
