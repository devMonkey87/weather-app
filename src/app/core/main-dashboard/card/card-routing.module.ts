import { NgModule } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card.component';

export const routes: Routes = [
  { path: '', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
