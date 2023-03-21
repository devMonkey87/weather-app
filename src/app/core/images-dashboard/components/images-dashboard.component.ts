import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageViewerComponent } from 'src/app/shared/image-viewer/image-viewer.component';
import {
  OperationType,
  TableTypes,
} from 'src/app/shared/table/constants/enums/TableTypes.enum';
import {
  RowElement,
  TableColumn,
} from 'src/app/shared/table/constants/interfaces';
import { columnConfig, elementsConfig } from '../constants';
import { PokemonService } from '../services/pokemon.service';
import { Image } from './../interfaces';
import { CreateImageModalComponent } from './create-image-modal/create-image-modal.component';

@Component({
  selector: 'app-images-dashboard',
  templateUrl: './images-dashboard.component.html',
  styleUrls: ['./images-dashboard.component.scss'],
})
export class ImagesDashboardComponent implements OnInit {
  public get imageService(): PokemonService {
    return this._pokemonService;
  }
  public tableStyleClass: TableTypes | undefined;
  public tableColumns: TableColumn[] = [];
  public tableElements: Image[] = [];

  constructor(
    private readonly _pokemonService: PokemonService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.setupTable();
  }

  private async setupTable() {
    this.tableColumns = columnConfig();
    this.tableStyleClass = TableTypes.Basic;
    this.tableElements = elementsConfig(
      await this._pokemonService.getAllPokemons()
    ).map((item) => item.image);

    console.log(this.tableElements);
  }

  public elementClicked(element: RowElement) {
    switch (element.operation) {
      case OperationType.DELETE: {
        this._pokemonService.deletePokemon(element.value).then(() => {
          console.log('eliminado');
          window.location.reload();
        });
        break;
      }
      case OperationType.SELECT: {
        this.openModal(element.value);
        break;
      }
    }
  }

  /**
   * It opens a modal with the ImageViewerComponent, and passes the base64File to the component
   * @param {string} base64File - The base64 string of the image you want to display.
   */
  private openModal(base64File: string) {
    const modalRef = this.modalService.open(ImageViewerComponent, {
      centered: true,
      size: 'sm',
      backdrop: true,
    });
    modalRef.componentInstance.base64Image = base64File;
  }

  /**
   * The function opens a modal dialog using the modal service
   */
  public openDialog() {
    const modalRef = this.modalService.open(CreateImageModalComponent, {
      centered: true,
      backdrop: true,
    });
  }
}
