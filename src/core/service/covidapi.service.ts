import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class CovidapiService {





  

  constructor(private httpClient: HttpClient) { 
   }
   public getTotal(){
    return this.httpClient.get('https://coronavirus-19-api.herokuapp.com/all');
    
  }
  public getCountries(){
    return this.httpClient.get('https://coronavirus-19-api.herokuapp.com/countries');
  }


}
