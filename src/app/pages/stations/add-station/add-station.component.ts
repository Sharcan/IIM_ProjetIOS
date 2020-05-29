import { Component, OnInit } from '@angular/core';
import { RatpService } from 'src/app/shared/ratp.service';

import { stationsFavorites } from '../../../shared/listStations';

import { PreloadAllModules, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.scss'],
})
export class AddStationComponent implements OnInit {

  selectedTransport;
  lines;

  selectedLine;

  station;
  selectedStation;
  constructor(private ratpService: RatpService, private route: Router) { }

  ngOnInit() {}

  getLines(transport) {
    if (transport === '') {
      return false;
    } else {
      this.ratpService.getLine(transport).subscribe(
        res => {
          this.lines = res['result'][transport];
        }
      );
    }
  }


  getLineStation(transport, selectedLine) {
    this.ratpService.getStations(transport, selectedLine).subscribe(
      res => {
        this.station = res['result']['stations'];
        console.log(this.station);
      }
    )
  }

  addToFav(){
    stationsFavorites.push({transport: this.selectedTransport, line: this.selectedLine, station: this.selectedStation});
    this.route.navigateByUrl('/stations');
  }
}
