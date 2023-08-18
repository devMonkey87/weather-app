import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxFileUploaderModule } from '@aposin/ng-aquila/file-uploader';
import { NxMessageToastService } from '@aposin/ng-aquila/message';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateImageModalComponent } from './create-image-modal.component';

@NgModule({
  declarations: [CreateImageModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    NxFileUploaderModule,
    SharedModule
  ],
  exports: [CreateImageModalComponent],
})
export class CreateImageModalModule {}
