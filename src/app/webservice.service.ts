import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
     return this.http.get<any>('https://restcountries.eu/rest/v2/region/europe');
  }
}
