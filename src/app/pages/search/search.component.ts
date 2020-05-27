import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddressService } from './../../shared/address.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  addresses;

  constructor(private modalController: ModalController, public addressService: AddressService) { }

  ngOnInit() {
    this.addressService.load().then(data => {
      this.addresses = data;
    })
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  loadAddress() {
    this.addressService.load().then(data => {
      this.addresses = data;
      console.log(this.addresses);
    });
  }

}
