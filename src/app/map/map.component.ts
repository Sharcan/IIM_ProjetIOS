import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {

  map;

  longitude: number;
  latitude: number;

  constructor(private geoLocation: Geolocation) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    this.geoLocation.getCurrentPosition().then(
      resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        this.map = L.map('map', {
          center: [this.latitude, this.longitude],
          zoom: 18
        });

        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        tiles.addTo(this.map);

        const circle = L.circle([this.latitude, this.longitude], {
          color: 'blue',
          fillColor: 'blue',
          fillOpacity: 0.7,
          radius: 3
        }).addTo(this.map)

      }
    ).
    catch(error => {
      console.log('Error getting location', error);
    });


    
  }



}
