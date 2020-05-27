import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddressService } from './../../shared/address.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  addresses;
  start;
  end;

  constructor(private modalController: ModalController, public addressService: AddressService) { }

  ngOnInit() {}

  searchAddress() {
    this.addressService.load(this.end).subscribe(data => {
      this.addresses = data['features'];
      console.log(this.addresses);
    });
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
