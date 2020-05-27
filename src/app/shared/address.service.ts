import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  
  providedIn: 'root'
})
export class AddressService {

  data;

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get('https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port');
  }
}
