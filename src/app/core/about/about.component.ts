import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { transitionAnimation } from 'src/app/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('openClose', [
      transition('void => *', [
        useAnimation(transitionAnimation, {
          params: {
            height: 0,
            opacity: 0,
            color: 'red',
            time: '4s'
          }
        })
      ])
    ])
  ],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
