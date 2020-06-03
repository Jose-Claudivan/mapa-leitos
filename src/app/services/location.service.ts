import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
    getLocation(): Promise<any>{
        return new Promise((resolve, reject) => {
          if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(function(position){
  
              resolve({lng: position.coords.longitude, lat: position.coords.latitude});
              
            }, err => {
              reject(err);
              console.log(err)
            })
          } else {
            console.log('Opa, navegador não permite rastreamento!')
          }
      })
    }
}
