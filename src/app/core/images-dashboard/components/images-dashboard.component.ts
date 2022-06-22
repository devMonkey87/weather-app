import { Component, OnInit } from '@angular/core';
import { TableTypes } from 'src/app/shared/table/constants/enums/TableTypes.enum';
import { TableColumn } from 'src/app/shared/table/constants/interfaces';
import { PictureService } from '../services/picture.service';
import { columnConfig } from './constants';
import {Image } from './../interfaces';

@Component({
  selector: 'app-images-dashboard',
  templateUrl: './images-dashboard.component.html',
  styleUrls: ['./images-dashboard.component.scss'],
})
export class ImagesDashboardComponent implements OnInit {
  public tableStyleClass: TableTypes | undefined;
  public tableColumns: TableColumn[] = [];
  public tableElements: Image[] = [];

  constructor(private readonly imageService: PictureService) {

  }

  ngOnInit(): void {
    this.setupTable();
  }

  private async setupTable() {
    this.tableColumns = columnConfig();
    this.tableStyleClass = TableTypes.Basic;
    //TODO: check to adapt table component for supporting images/ icons as table elements
    this.tableElements = await this.imageService.getAllImages();
  }

  public imageClicked(imageId: number) {
    console.log(imageId)
  }
}
