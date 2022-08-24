import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateImageModalComponent } from './create-image-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [CreateImageModalComponent],
  imports: [CommonModule, ReactiveFormsModule, FileUploadModule, FormsModule],
  exports: [CreateImageModalComponent],
})
export class CreateImageModalModule {}

