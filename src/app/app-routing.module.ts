import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ImcComponent } from './core/imc/imc.component';

const routes: Routes = [
  {
    path: 'images',
    loadChildren: () =>
      import('./../app/core/images-dashboard/images-dashboard.module').then(
        (m) => m.ImagesDashboardModule
      ),
  },
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
    path: 'document',
    loadChildren: () =>
      import('./../app/core/document/documents.module').then(
        (m) => m.DocumentsModule
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
