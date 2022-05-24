import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from './constants/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() customTableClass: string | undefined;
  @Input() columnsConfig: TableColumn[] = [];
  @Input() elementsConfig: any = [];

  constructor() {}

  ngOnInit(): void {
    
    // this.columnsConfig = [
    //   {
    //     title: 'ID',
    //     isDisabled: false,
    //   },
    //   {
    //     title: 'name',
    //     isDisabled: false,
    //   },
    // ];

    // this.elementsConfig = [
    //   {
    //     ID: 'aaa',
    //     name: 1,
    //   },
    //   {
    //     ID: 'bbb',
    //     name: 2,
    //   },
    // ];
  }

  
}
