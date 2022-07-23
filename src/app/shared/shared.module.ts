import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { TableComponent } from './table/table.component';
//Prime NG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [TableComponent, ImageViewerComponent],
  imports: [CommonModule, ButtonModule, CheckboxModule, FormsModule, TooltipModule],
  exports: [TableComponent, ImageViewerComponent],
})
export class SharedModule {}
