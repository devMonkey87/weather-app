import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitcoinComponent } from './components/bitcoin.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [BitcoinComponent],
  imports: [CommonModule, SharedModule],
  exports: [BitcoinComponent],
})
export class BitcoinModule {}
