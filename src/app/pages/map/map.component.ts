import { Component, OnInit, AfterViewInit } from '@angular/core';
import{CovidapiService}from 'src/core/service/covidapi.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit,OnInit {

  private map:any;

  public lat:number;
  public lng:number;


 

   tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
 circle = L.circle([10.10,10.10], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 100000
});

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 42.245, 15.271],
      zoom:3
    });
  }

  private getLangLng(): void {
    fetch("https://restcountries.eu/rest/v2/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(({ name,latlng }) =>
      console.log("name :"+name+" coord: "+latlng)
    );
  });
  }

 

  

  ngAfterViewInit(): void {
    this.initMap();
    this.tiles.addTo(this.map);
    this.circle.addTo(this.map);
    this.circle.bindPopup("I am a circle.");
    
  }

  ngOnInit():void{
    this.getLangLng();

    

  }



  constructor(private api:CovidapiService) { }

}
