import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateImageModalComponent } from './create-image-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CreateImageModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    FormsModule,
    NgbDropdownModule
  ],
  exports: [CreateImageModalComponent],
})

export class CreateImageModalModule{}
