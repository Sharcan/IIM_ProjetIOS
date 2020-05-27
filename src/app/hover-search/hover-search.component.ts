import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../pages/search/search.component';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hover-search',
  templateUrl: './hover-search.component.html',
  styleUrls: ['./hover-search.component.scss'],
})
export class HoverSearchComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async createModal() {
    const modal = await this.modalController.create({
      component: SearchComponent
    });
    return await modal.present();
  }

}
