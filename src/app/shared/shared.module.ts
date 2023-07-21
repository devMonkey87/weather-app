import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModalComponent } from './dynamic-form-modal/dynamic-form-modal.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { TableComponent } from './table/table.component';

//Prime NG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';

//Aposing aquila
import { NxBadgeModule } from '@aposin/ng-aquila/badge';
import { NxCheckboxModule } from '@aposin/ng-aquila/checkbox';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxPaginationModule } from '@aposin/ng-aquila/pagination';
import { NxSwitcherModule } from '@aposin/ng-aquila/switcher';
import { NxTableModule } from '@aposin/ng-aquila/table';

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
    FileUploadModule,
    NxLinkModule,
    NxCheckboxModule,
    NxBadgeModule,
    NxPaginationModule,
    NxSwitcherModule,
    NxTableModule,
  ],
  exports: [
    TableComponent,
    ImageViewerComponent,
    ButtonModule,
    DynamicFormModalComponent,
    FileUploadModule,
    NxLinkModule,
    NxCheckboxModule,
    NxBadgeModule,
    NxPaginationModule,
    NxSwitcherModule,
    NxTableModule,
  ],
})
export class SharedModule {}
