import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LocationService } from './service/location.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userName = 'Mark';
  constructor(private locationService: LocationService) { }
  ngOnInit(): void {
    var location = this.locationService.getLocation().subscribe((location) => {
      console.log('location', location)

    })
  }
}
