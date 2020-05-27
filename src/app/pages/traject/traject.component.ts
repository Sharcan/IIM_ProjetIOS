import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-traject',
  templateUrl: './traject.component.html',
  styleUrls: ['./traject.component.scss'],
})
export class TrajectComponent implements OnInit {

  coordinates;
  map;

  longitude: number;
  latitude: number;
  start: number;
  end: number;

  constructor(private route: ActivatedRoute, private geoLocation: Geolocation) { }

  ngOnInit() {
    var coords = this.route.snapshot.paramMap.get('coordinates');
    this.coordinates = coords.split(',');
  }

  ngAfterViewInit() {

    this.geoLocation.getCurrentPosition().then(
      resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        this.map = L.map('traject', {
          center: [this.latitude, this.longitude],
          zoom: 18
        });

        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        tiles.addTo(this.map);

        const circle = L.circle([this.latitude, this.longitude], {
          color: '#004FA3',
          fillColor: '#4BC0AD',
          fillOpacity: 0.7,
          radius: 3,
          weight: 1.5,
        }).addTo(this.map)

        //Traject
        L.Routing.control({
          router: L.Routing.osrmv1({
            serviceUrl: `http://router.project-osrm.org/route/v1/`
          }),
          showAlternatives: true,
          lineOptions: {styles: [{color: '#242c81', weight: 7}]},
          fitSelectedRoutes: false,
          altLineOptions: {styles: [{color: '#ed6852', weight: 7}]},
          show: false,
          routeWhileDragging: true,
          waypoints: [
            L.latLng(this.latitude, this.longitude),
            L.latLng(this.coordinates[0], this.coordinates[1])
          ]
        }).addTo(this.map);

      }
    ).
    catch(error => {
      console.log(error);
    });

  }

}
