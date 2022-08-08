import { Component, OnInit } from '@angular/core';
import { TableTypes } from 'src/app/shared/table/constants/enums/TableTypes.enum';
import { TableColumn } from 'src/app/shared/table/constants/interfaces';
import { columnConfig, mapBitcoinData } from '../constants';
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
    this.bitcoinService
      .getData()
      .then(
        (bitcoin) =>
          (this.tableElements = bitcoin.map((bitcoinAction) =>
            mapBitcoinData(bitcoinAction)
          ))
      );
  }
}
