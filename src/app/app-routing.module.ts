import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImcComponent } from './core/imc/imc.component';
import { CardComponent } from './core/main-dashboard/card/card/card.component';
import { MainDashboardComponent } from './core/main-dashboard/main-dashboard.component';

const routes: Routes = [
  {
    path: "imc",
    component: ImcComponent
  },
  {
    path: "tbDefined",
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
