import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableTypes } from 'src/app/shared/shared/table/constants/enums/TableTypes.enum';
import { TableColumn } from 'src/app/shared/shared/table/constants/interfaces';
import { columnConfig } from '../constants';
import { IBitcoinAction } from '../interfaces/IBitcoinAction';
import { BitcoinService } from '../services/bitcoin.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.scss'],
})
export class BitcoinComponent implements OnInit {
  constructor(private readonly bitcoinService: BitcoinService) {}

  public tableStyleClass: TableTypes | undefined;
  public tableColumns: TableColumn[] = [];
  public tableElements: any[] = [];

  ngOnInit() {
    this.setupTable();
  }

  setupTable() {
    this.tableColumns = columnConfig();
    this.bitcoinService.getData().then(
      (bitcoin) =>
        (this.tableElements = bitcoin.map((bitcoinAction) => {
          const openTimeDate = new Date(bitcoinAction.openTime);
          const closeTimeDate = new Date(bitcoinAction.closeTime);
          const bAction: IBitcoinAction = {
            openTime: openTimeDate.toLocaleDateString('en-GB'),
            closeTime: closeTimeDate.toLocaleDateString('en-GB'),
            openPrice: bitcoinAction.openPrice,
            lastPrice: bitcoinAction.lastPrice,
            symbol: bitcoinAction.symbol,
            priceChangePercent: bitcoinAction.priceChangePercent,
          }; //TODO: make it more efficient with restOfProperties assignation, only date 
          // properties need to be adapted
          return bAction;
        }))
    );
  }
}
