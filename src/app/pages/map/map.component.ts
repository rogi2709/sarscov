import { Component, OnInit, AfterViewInit } from '@angular/core';
import{CovidapiService}from 'src/core/service/covidapi.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {

  private map:any;

   tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
 circle = L.circle([40.480, 20.171], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
});

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 32.55, 40.43 ],
      zoom: 3
    });
  }

 

  

  ngAfterViewInit(): void {
    this.initMap();
    this.tiles.addTo(this.map);
    this.circle.addTo(this.map);
    
  }



  constructor(private api:CovidapiService) { }

}
