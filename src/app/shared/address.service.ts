import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  
  providedIn: 'root'
})
export class AddressService {

  research;

  constructor(private http: HttpClient) { }

  load(research) {
    this.research = research.replace(' ', '+')
    return this.http.get('https://api-adresse.data.gouv.fr/search/?q=' + this.research + '&limit=10');
  }
}
