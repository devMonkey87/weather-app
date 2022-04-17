import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, FontAwesomeModule, CardRoutingModule],
  exports: [CardComponent],
})
export class CardModule {}
