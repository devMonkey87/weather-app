import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImagesDashboardComponent } from './components/images-dashboard.component';
import { ImagesDashboardRoutingModule } from './components/images-dashboard-routing.module';

@NgModule({
  declarations: [ImagesDashboardComponent],
  imports: [CommonModule, SharedModule, ImagesDashboardRoutingModule],
  exports: [ImagesDashboardComponent],
})
export class ImagesDashboardModule {}
