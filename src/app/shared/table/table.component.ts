import { Component, Input } from '@angular/core';
import { TableColumnType } from './constants/enums/TableTypes.enum';
import { TableColumn } from './constants/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() customTableClass: string | undefined;
  @Input() columnsConfig: TableColumn[] = [];
  @Input() elementsConfig: any = [];

  tableColumnTypes = TableColumnType;

  constructor() {}


  
}