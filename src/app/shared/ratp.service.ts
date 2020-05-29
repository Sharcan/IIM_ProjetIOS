import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RatpService {

  constructor(private http: HttpClient) { }

  getTrafic() {
    return this.http.get('https://api-ratp.pierre-grimaud.fr/v4/traffic');
  }
}
