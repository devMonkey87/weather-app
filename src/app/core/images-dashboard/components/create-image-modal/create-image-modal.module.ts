import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateImageModalComponent } from './create-image-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [CreateImageModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
   // FileUploadModule,
    FormsModule,
   // DropdownModule,
  ],
  exports: [CreateImageModalComponent],
})
export class CreateImageModalModule {}
