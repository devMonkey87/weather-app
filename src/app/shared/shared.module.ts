import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent, ImageViewerComponent],
  imports: [CommonModule],
  exports: [TableComponent, ImageViewerComponent],
})
export class SharedModule {}
