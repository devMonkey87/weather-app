import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { TableComponent } from './table/table.component';
import { DynamicFormModalComponent } from './dynamic-form-modal/dynamic-form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

//Prime NG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    TableComponent,
    ImageViewerComponent,
    DynamicFormModalComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    TooltipModule,
    ReactiveFormsModule,
  ],
  exports: [
    TableComponent,
    ImageViewerComponent,
    ButtonModule,
    DynamicFormModalComponent,
  ],
})
export class SharedModule {}
