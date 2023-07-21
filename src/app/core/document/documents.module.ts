import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocumentRoutingModule } from './components/document-routing.module';
import { DocumentsComponent } from './components/documents.component';

@NgModule({
  declarations: [DocumentsComponent],
  imports: [CommonModule, DocumentRoutingModule, SharedModule],
  exports: [DocumentsComponent],
})
export class DocumentsModule {}
