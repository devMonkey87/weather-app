import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { BitcoinComponent } from './core/bitcoin/components/bitcoin.component';
import { ImcComponent } from './core/imc/imc.component';

const routes: Routes = [
  {
    path: 'imc',
    component: ImcComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'bitcoin',
    loadChildren: () =>
      import('./../app/core/bitcoin/bitcoin.module').then(
        (m) => m.BitcoinModule
      ),
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('./../app/core/main-dashboard/card/card.module').then(
        (m) => m.CardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
