import { Component, OnInit } from '@angular/core';
import { RatpService } from 'src/app/shared/ratp.service';

import { stationsFavorites } from '../../../shared/listStations';


@Component({
  selector: 'app-station-main',
  templateUrl: './station-main.component.html',
  styleUrls: ['./station-main.component.scss'],
})
export class StationMainComponent implements OnInit {

  stationsFavorites = stationsFavorites;

  constructor(private ratpService: RatpService) { }

  ngOnInit() {}



  removeFavoritesStation(id) {
    console.log('je passe par la');
    stationsFavorites.splice(id, 1);
  }

}
