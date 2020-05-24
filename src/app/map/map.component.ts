import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { QueryOptions } from '../models/query-options';
import { UnidadeService} from '../services/unidade.service';
import { Unidade } from '../models/unidade';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
// google maps zoom level
  zoom: number = 9;
  
  // initial center position for the map
  lat: number = -8.619084;
  lng: number = -35.900808;

  unidades: Unidade[] 
  iconRed
  iconYellow
  iconGreen
  iconUser
  
  constructor(private unidadeService: UnidadeService) { }

  ngOnInit(): void {
        
        this.iconUser = {

            path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
            fillColor: '#000000',
            fillOpacity: .9,
            strokeWeight: 0,
            scale: 1
        }

        this.iconRed = {

            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: '#FF0000',
            fillOpacity: .9,
            strokeWeight: 0,
            scale: 1
        }

        this.iconYellow = {

            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: '#FFCC00',
            fillOpacity: .9,
            strokeWeight: 0,
            scale: 1
        }

        this.iconGreen = {

            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: '#67b200',
            fillOpacity: .9,
            strokeWeight: 0,
            scale: 1
        }
      this.unidadeService.list(new QueryOptions).
                subscribe( unidades => {
                    this.unidades = unidades
                });
  }

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

  toString(value){
    return value.toString()
  }

  getIcon(unidade){
    let leitosDisp = unidade.leitos_disponiveis

    if(leitosDisp<5){
        return this.iconRed
    }else if(leitosDisp>5 && leitosDisp<10){
        return this.iconYellow
    }else{
        return this.iconGreen
    }
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

