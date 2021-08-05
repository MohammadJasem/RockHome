import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PropertyModelServer } from 'src/app/models/property.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private httpClient: HttpClient) { }

  getAllProperties(): Observable<properties>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = {
      headers
    };
    return this.httpClient.get<properties>(`${this.SERVER_URL}/properties`, options);
  }

  getProperty(id: Number): Observable<properties>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = {
      headers
    };
    const params = {propertyId: id};
    return this.httpClient.post<properties>(`${this.SERVER_URL}/property`, params, options);
  }
}


export interface properties  {
  statusCode: number, success: boolean, messages: Array<any>, data: Array<any>
};