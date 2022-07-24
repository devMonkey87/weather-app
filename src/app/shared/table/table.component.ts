import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  
  @Output() elementClick = new EventEmitter<any>();
  @Output() selected = new EventEmitter<boolean>();

  tableColumnTypes = TableColumnType;

  constructor() {}

  imageClicked(element: any) {
    this.elementClick.emit(element);
  }

  interpolateImgSource(element: string) {
    return `data:image/png;base64,${element}`;
  }
}
