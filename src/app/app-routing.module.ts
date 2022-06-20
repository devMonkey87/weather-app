import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ImcComponent } from './core/imc/imc.component';
import { ImageViewerComponent } from './shared/image-viewer/image-viewer.component';

const routes: Routes = [
  {
    path: 'images',
    component: ImcComponent,
  },
  {
    path: 'imc',
    component: ImcComponent,
  },
  {
    path: 'about',//TODO: deshacer y poner de nuevo el About component
    component: ImageViewerComponent,
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
