import { Component, OnInit } from '@angular/core';
import { TableTypes } from 'src/app/shared/table/constants/enums/TableTypes.enum';
import { TableColumn } from 'src/app/shared/table/constants/interfaces';
import { columnConfig } from './constants';

@Component({
  selector: 'app-images-dashboard',
  templateUrl: './images-dashboard.component.html',
  styleUrls: ['./images-dashboard.component.scss'],
})
export class ImagesDashboardComponent implements OnInit {
  public tableStyleClass: TableTypes | undefined;
  public tableColumns: TableColumn[] = [];
  public tableElements: any[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log('hast aqy')
    this.setupTable();
  }

  private setupTable() {
    this.tableColumns = columnConfig();
    this.tableStyleClass = TableTypes.Basic;
    //TODO: check to adapt table component for supporting images/ icons as table elements
    this.tableElements = [{"id": 1, "description": "sds" , "image": "d"}]
  }
}
