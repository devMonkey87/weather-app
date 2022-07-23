import { Component, OnInit } from '@angular/core';
import { TableTypes } from 'src/app/shared/table/constants/enums/TableTypes.enum';
import { TableColumn } from 'src/app/shared/table/constants/interfaces';
import { PictureService } from '../services/picture.service';
import { columnConfig } from './constants';
import { Image } from './../interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageViewerComponent } from 'src/app/shared/image-viewer/image-viewer.component';

@Component({
  selector: 'app-images-dashboard',
  templateUrl: './images-dashboard.component.html',
  styleUrls: ['./images-dashboard.component.scss'],
})
export class ImagesDashboardComponent implements OnInit {
  public tableStyleClass: TableTypes | undefined;
  public tableColumns: TableColumn[] = [];
  public tableElements: Image[] = [];

  constructor(
    private readonly imageService: PictureService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.setupTable();
  }

  private async setupTable() {
    this.tableColumns = columnConfig();
    this.tableStyleClass = TableTypes.Basic;
    this.tableElements = await this.imageService.getAllImages();
  }

  public imageClicked(element: any) {
    this.openModal(element.image); //TODO: change this value for the String base64 representation of the picture retrieved from table
  }

  private openModal(base64File: string) {
    const modalRef = this.modalService.open(ImageViewerComponent, {
      centered: true,
    });
    modalRef.componentInstance.base64Image = base64File;
  }
}
