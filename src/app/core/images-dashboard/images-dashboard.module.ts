import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateImageModalModule } from './components/create-image-modal/create-image-modal.module';
import { ImagesDashboardRoutingModule } from './components/images-dashboard-routing.module';
import { ImagesDashboardComponent } from './components/images-dashboard.component';
import { PictureService } from './services/picture.service';

@NgModule({
  declarations: [ImagesDashboardComponent],
  imports: [CommonModule, SharedModule, ImagesDashboardRoutingModule, CreateImageModalModule],
  exports: [ImagesDashboardComponent],
  providers: [PictureService],
})
export class ImagesDashboardModule {}
