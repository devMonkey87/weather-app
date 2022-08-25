import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { CreateImageModalComponent } from './create-image-modal.component';

@NgModule({
  declarations: [CreateImageModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
  ],
  exports: [CreateImageModalComponent],
})
export class CreateImageModalModule {}
