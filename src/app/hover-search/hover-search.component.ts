import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hover-search',
  templateUrl: './hover-search.component.html',
  styleUrls: ['./hover-search.component.scss'],
})
export class HoverSearchComponent implements OnInit {

  number = 6;

  constructor() { }

  ngOnInit() {}

  coucou(num) {
    console.log(num)
  }

}
