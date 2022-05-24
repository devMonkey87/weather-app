import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { BitcoinModule } from './core/bitcoin/bitcoin.module';
import { BitcoinComponent } from './core/bitcoin/components/bitcoin.component';
import { ImcComponent } from './core/imc/imc.component';
import { TableComponent } from './shared/shared/table/table.component';

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
    component: BitcoinComponent,
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
