import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = -8.619084;
  lng: number = -35.950808;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: -8.619084,
		  lng: -35.950808,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: -8.719084,
		  lng: -35.970908,
		  label: 'B',
		  draggable: false
	  },
	  {
      lat: -8.619084,
		  lng: -35.750808,
		  label: 'C',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

/*
export class AppComponent {
  title = 'mapa';
  titulo: string = 'Cupira'
  lat: number = -8.610471;
  lng: number = -35.9526237;
  zoom: number = 15;
  label: string = 'C';
  
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

}*/
