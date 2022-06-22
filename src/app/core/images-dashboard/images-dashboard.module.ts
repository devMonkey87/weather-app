import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImagesDashboardComponent } from './components/images-dashboard.component';
import { ImagesDashboardRoutingModule } from './components/images-dashboard-routing.module';
import { PictureService } from './services/picture.service';

@NgModule({
  declarations: [ImagesDashboardComponent],
  imports: [CommonModule, SharedModule, ImagesDashboardRoutingModule],
  exports: [ImagesDashboardComponent],
  providers: [PictureService],
})
export class ImagesDashboardModule {}
