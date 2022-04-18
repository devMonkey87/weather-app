import {
  animate, style, transition, trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('slideUpDown', [
      transition(':enter', [style({ height: '100px' }), animate('3s')]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
