import { Component, OnInit } from '@angular/core';

import { RatpService } from '../../../shared/ratp.service';

import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../../popover/popover.component';

@Component({
  selector: 'app-rer',
  templateUrl: './rer.component.html',
  styleUrls: ['./rer.component.scss'],
})
export class RERComponent implements OnInit {

  trafic: Array<object>;
  traficIncident: Array<object> = [];
  traficTrav: Array<object> = [];


  constructor(private ratpService: RatpService, public popoverController: PopoverController) { }

  ngOnInit() {
    this.ratpService.getTrafic().subscribe(
      res => {
        this.trafic = res['result']['rers'];

        this.trafic.forEach(element => {
          if (element['slug'] === 'critical') {
            this.traficIncident.push(element);
          }
          if (element['slug'] === 'normal_trav') {
            this.traficTrav.push(element);
          }
        });
      }
    )
  }


  async moreInformations(ev) {
    console.log(ev);
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'popover-css',
      translucent: false,
      componentProps: {title: this.traficIncident[ev]['title'], message: this.traficIncident[ev]['message']}
    });
    return await popover.present();
  }
}
