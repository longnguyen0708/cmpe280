import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Location } from '../model/location';
import { Http }       from '@angular/http';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class LocationService {
  api_key = 'AIzaSyD1t7Y8nO_UTOBH3NdkTRiBF-Rh5-S3H7Y';
  private currLocation = new Subject<Location>();
  //subscribe this to get current location
  currLocation$ = this.currLocation.asObservable();

  constructor(private http: Http) {
    this.getLocation();
  }

  private getLocation(){
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position) => {
          console.log('inside position', position)
          this.getLocationDetail(position).subscribe(response => {
            console.log(response);
            let l = new Location();
            l.lat = "" + position.coords.latitude;
            l.lng = "" + position.coords.longitude;
            l.zipcode = response.results[0].address_components[7].long_name;

            this.currLocation.next(l);
          });

        }, (error) => {
          console.log("ERROR", error.code);
        })
      } else {
          console.log("ERROR",'Location service is not supported');
      }
  }

  getLocationDetail(position): Observable<any> {
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${this.api_key}`;
      console.log('url', url);
      return this.http
        .get(url)
        .map(response => response.json());
  }
}
