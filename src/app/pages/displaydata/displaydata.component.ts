import { Component, OnInit } from '@angular/core';
import{CovidapiService}from 'src/core/service/covidapi.service';








@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.scss'],
})
export class DisplaydataComponent implements OnInit {

  tutto;
  info;
  page: number = 1;
  totalRec : number;
  flagName;

  
  constructor(private api:CovidapiService) { }
  ngAfterViewInit() {
    
  }

 
  ngOnInit(): void {
 
   this.api.getTotal().subscribe((data)=>{
    
    this.info=data;
  });

  //this.api.getCountries().subscribe(data=>this.tutto=data);

  this.api.getCountries().subscribe((data: any[])=>{

    this.tutto=data;
    this.totalRec=data.length;
    
    
    
  }) 

 
 
  
   



}

}
