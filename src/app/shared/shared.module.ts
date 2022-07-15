import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { TableComponent } from './table/table.component';
//Prime NG
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [TableComponent, ImageViewerComponent],
  imports: [CommonModule, ButtonModule],
  exports: [TableComponent, ImageViewerComponent],
})
export class SharedModule {}
