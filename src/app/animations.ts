import {
  animation,
  style,
  animate,
} from '@angular/animations';

export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    color: '{{ color }}',
  }),
  animate('{{ time }}', style({ opacity: 1 })),
]);
