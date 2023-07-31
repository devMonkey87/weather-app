import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BitcoinRoutingModule } from './components/bitcoin-routing.module';
import { BitcoinComponent } from './components/bitcoin.component';

@NgModule({
  declarations: [BitcoinComponent],
  imports: [CommonModule, SharedModule, BitcoinRoutingModule],
  exports: [BitcoinComponent],
})
export class BitcoinModule {}
