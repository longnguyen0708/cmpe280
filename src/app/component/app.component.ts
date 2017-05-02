import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMPE280 Shopping Cart!';

  // constructor(private af: AngularFire) {
  //   var a = this.af.database.list('/heroes');
  //   a.subscribe(snapshots => {
  //     console.log("firebase", snapshots);
  //   })
  // }
}
