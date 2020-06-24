import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { QueryOptions } from '../../services/query-options';
import { UnidadeService} from '../../services/unidade.service';
import { Unidade } from '../../models/unidade';
//import {} from '@types/googlemaps';
import { map } from 'rxjs/operators';
import { LocationService } from '../../services/location.service';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  
  // google maps zoom level
  zoom: number = 15;
  
  // initial center position for the map
  //lat: number = -8.619084;
  //lng: number = -35.900808;

  lat: number
  lng: number

  unidades: Unidade[] 
  unidadeSelected: Unidade
  iconRed
  iconYellow
  iconGreen
  iconUser

  visible

  origin: any;
  destination: any;
  rota: boolean

  btnRotaName: string

  distance: number;
  
  constructor(private unidadeService: UnidadeService, private locationService: LocationService) { }

  ngOnInit(): void {


        this.locationService.getLocation().then(pos =>{
          this.lat = pos.lat
          this.lng = pos.lng

          this.origin = { 
            lat: this.lat,
            lng: this.lng 
        };
        })

        this.btnRotaName = "Rota"
        this.rota = false
        this.visible = false
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
                    console.log(this.unidades)
                });
  }

    

  setDestination(){
    this.destination = { 
            lat: +this.unidadeSelected.latitude, 
            lng: +this.unidadeSelected.longitude
        };  
  }


  clickedMarker(unidade: Unidade, index: number) {
    this.changeVisible()
    this.unidadeSelected = unidade
    this.setDestination()
    this.unidadeSelected.distancia = this.calculateDistance(this.origin, this.destination)

    console.log(`clicked the marker: ${unidade.nome || index}`)
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
    let leitosDisp = unidade.leito.disponiveis

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

  tracarRota(){
    if(this.rota){
        this.btnRotaName = "Rota"
    }else{
        this.btnRotaName = "Voltar"
    }
    console.log("Lat: "+this.lat+" long: "+this.lng)
    this.rota = !this.rota
  }

  chamarUber(){
    alert("Chamando Uber")
  }
  
  changeVisible(){
    this.visible = true
  }

  // calculate the distances from point1 to point2
    calculateDistance(point1, point2):string {
        const p1 = new google.maps.LatLng(
        point1.lat,
        point1.lng
        );
        const p2 = new google.maps.LatLng(
        point2.lat,
        point2.lng
        );
        return (
        google.maps.geometry.spherical.computeDistanceBetween(p1, p2)/1000
        ).toFixed(2);
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

