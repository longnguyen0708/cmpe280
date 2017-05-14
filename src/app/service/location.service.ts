import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Location } from '../model/location';
import { Http }       from '@angular/http';

@Injectable()
export class LocationService {
  api_key = 'AIzaSyD1t7Y8nO_UTOBH3NdkTRiBF-Rh5-S3H7Y';
  currLocation: Location;

  constructor(private http: Http) {
    this.currLocation = new Location();
  }
  getLocation() : Observable<Location> {
    return Observable.create(observer => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position) => {
          console.log('inside position', position)
          this.getLocationDetail(position).subscribe(response => {
            console.log(response);
            this.currLocation.lat = "" + position.coords.latitude;
            this.currLocation.lng = "" + position.coords.longitude;
            this.currLocation.zipcode = response.results[0].address_components[7].long_name;

            observer.next(this.currLocation);
            observer.complete();
          });

        }, (error) => {
          switch (error.code) {
            case 1:
              observer.error('Location service is not allowed');
              break;
            case 2:
              observer.error('Location service is unavailable');
              break;
            case 3:
              observer.error('Location service is timeout');
              break;
                      }
        })
      } else {
          observer.error('Location service is not supported');
      }
    })
  }

  getLocationDetail(position): Observable<any> {
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${this.api_key}`;
      console.log('url', url);
      return this.http
        .get(url)
        .map(response => response.json());
  }
}
