import {
  animation,
  style,
  animate,
  state,
  transition,
} from '@angular/animations';

export const transitionAnimation = animation([
  state('hide', style({
    display: 'none',
    opacity: 0
  })),
  state('show', style({
    display: 'block',
    opacity: 1
  })),
  transition('hide => show', animate('300ms ease-out')),
  transition('show => hide', animate('300ms ease-in'))
])

