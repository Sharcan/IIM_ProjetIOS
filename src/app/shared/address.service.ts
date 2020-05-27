import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  
  providedIn: 'root'
})
export class AddressService {

  data;

  constructor(private http: HttpClient) { }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      fetch('https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port', {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      })
      .then(response => { 
        console.log(Object.values(response.json()));
      })
      // this.http.get('https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port')
      //   .pipe(res => res.json())
      //   .subscribe(data => {
      //     this.data = data.results;
      //     resolve(this.data);
      //   });
    });
  }
}
