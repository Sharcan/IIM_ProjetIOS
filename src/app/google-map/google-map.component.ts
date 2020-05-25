import { Component, OnInit} from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment 
} from '@ionic-native/google-maps';

import { ActionSheetController, Platform, AlertController } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit{

  map: GoogleMap;

  latitude: number;
  longitude: number;

  constructor(private geoLocation: Geolocation,
              public alertController: AlertController,
              public actionCtrl: ActionSheetController,
              private platform: Platform
  ) {}

  async ngOnInit() {

    this.geoLocation.getCurrentPosition().then(
      resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
      }
    ).
    catch(error => {
      console.log('Error getting location', error);
    }).then(() => {

      this.platform.ready();
      this.loadMap();

    });


  }


  loadMap() {

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: this.latitude,
				  lng: this.longitude
        },
        zoom: 12,
        tilt: 30
      }
    })
  }

}
