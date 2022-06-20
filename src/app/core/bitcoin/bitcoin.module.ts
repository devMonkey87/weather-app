import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitcoinComponent } from './components/bitcoin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BitcoinRoutingModule } from './components/bitcoin-routing.module';

@NgModule({
  declarations: [BitcoinComponent],
  imports: [CommonModule, SharedModule, BitcoinRoutingModule],
  exports: [BitcoinComponent],
})
export class BitcoinModule {}
