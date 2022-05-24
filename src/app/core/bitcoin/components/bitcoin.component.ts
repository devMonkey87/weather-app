import { Component, OnInit } from '@angular/core';
import { TableTypes } from 'src/app/shared/shared/table/constants/enums/TableTypes.enum';
import { TableColumn } from 'src/app/shared/shared/table/constants/interfaces';
import { columnConfig, elementConfig } from '../constants';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.scss'],
})
export class BitcoinComponent implements OnInit {
  constructor() {}

  public tableStyleClass: TableTypes | undefined;
  public tableColumns: TableColumn[] = [];
  public tableElements: any[] = [];

  ngOnInit(): void {
    this.setupTable();
  }
  setupTable() {
    this.tableStyleClass = TableTypes.Dark;
    this.tableColumns = columnConfig();
    this.tableElements = elementConfig();
  }
}
