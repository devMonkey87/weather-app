import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('slideUpDown', [
      state(
        'up',
        style({
          marginLeft: '300px',
          marginTop: '-100px',
          opacity: 0,
          width: '300px',
        })
      ),
      state(
        'down',
        style({
          marginTop: '450px',
          marginLeft: '100px',
          opacity: 1,
          width: '300px',
        })
      ),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1000ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  constructor() {}
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    let x = window.location;
    console.log(
      '🚀 ~ file: about.component.ts ~ line 22 ~ AboutComponent ~ ngOnInit ~ x',
      x
    );
  }
}
