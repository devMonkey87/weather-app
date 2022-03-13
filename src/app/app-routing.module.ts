import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './core/main-dashboard/card/card/card.component';
import { MainDashboardComponent } from './core/main-dashboard/main-dashboard.component';

const routes: Routes = [
  {
    path: "test",
    component: MainDashboardComponent
  },
  {
    path: "xxx",
    component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
