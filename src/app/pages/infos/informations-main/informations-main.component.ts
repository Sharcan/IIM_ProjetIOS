import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations-main',
  templateUrl: './informations-main.component.html',
  styleUrls: ['./informations-main.component.scss'],
})
export class InformationsMainComponent implements OnInit {

  selectedSegment: string = "metro";

  constructor() { }

  ngOnInit() {}


  segmentChanged(e: any) {
    this.selectedSegment = e.detail.value;
  }

}
