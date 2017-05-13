import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class LocationService {
  constructor() {
  }
  getLocation() : Observable<any> {
    return Observable.create(observer => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position) => {
          console.log('inside position', position)
          observer.next(position);
          observer.complete();
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
}
