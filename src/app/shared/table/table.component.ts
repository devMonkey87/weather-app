import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  OperationType,
  TableColumnType,
} from './constants/enums/TableTypes.enum';
import { RowElement, TableColumn } from './constants/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() customTableClass: string | undefined;
  @Input() columnsConfig: TableColumn[] = [];
  @Input() elementsConfig: any = [];

  @Output() elementClick = new EventEmitter<RowElement>();

  @Output() selected = new EventEmitter<boolean>();

  tableColumnTypes = TableColumnType;

  constructor() {}

  imageClicked(image: any) {
    this.elementClick.emit({ value: image, operation: OperationType.SELECT });
  }

  interpolateImgSource(image: string) {
    return `data:image/png;base64,${image}`;
  }

  deletePokemon(id: string) {
    this.elementClick.emit({ value: id, operation: OperationType.DELETE });
  }
}
