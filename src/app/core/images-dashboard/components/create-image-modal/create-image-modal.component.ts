import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import {
  NxFileUploadConfig,
  NxFileUploader,
} from '@aposin/ng-aquila/file-uploader';
import {
  NxMessageToastConfig,
  NxMessageToastService,
} from '@aposin/ng-aquila/message';
import { Subject } from 'rxjs';
import { InsertedPokemon, PokemonType } from '../../interfaces';
import { PokemonService } from '../../services/pokemon.service';
import { TypesService } from '../../services/types.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

interface FileUploadErrorEvent {
  error: ErrorEvent;
  files: File[];
}

@Component({
  selector: 'app-create-image-modal',
  templateUrl: './create-image-modal.component.html',
  styleUrls: ['./create-image-modal.component.scss'],
})
export class CreateImageModalComponent implements OnInit {
  uploadedFiles: any[] = [];
  form!: FormGroup;
  types: PokemonType[] = [];

  selectedIcon: string = '';
  myCustomConfig: NxMessageToastConfig = {
    duration: 3000,
    context: 'success',
    announcementMessage: 'File was uploaded successfully!',
  };

  readonly uploadConfig: NxFileUploadConfig = {
    requestUrl: 'http://localhost:3000/api/upload',
    uploadSeparately: true,
    options: {
      reportProgress: true,
    },
  };

  public readonly uploader = new NxFileUploader(this.uploadConfig, this.http);

  private readonly _destroyed = new Subject<void>();
  testValue: object;

  imageUrl: string | ArrayBuffer | null = null;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly typesService: TypesService,
    private readonly pokemonSercice: PokemonService,
    private readonly http: HttpClient,
    private readonly messageToastService: NxMessageToastService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadTypes();
  }

  private initForm() {
    /* The code is creating a form group using the `fb.group()` method from the `UntypedFormBuilder` class.
The form group has three form controls: `name`, `type`, and `uploads[]`. */
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  loadTypes(): void {
    this.typesService.getTypes().then((typePromises) => {
      Promise.all(typePromises).then((resolvedTypes) => {
        this.types = resolvedTypes;
      });
    });
  }

  public submit() {
    this.createPokemon(this.form);
  }

  public onUpload(as: UploadEvent) {
    debugger;
    console.log('NUEVO COMPONENTE', as.files);
  }

  public testu(eo: FileUploadErrorEvent) {
    debugger;
  }

  public onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.readImage(file);
    }
  }

  readImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target?.result;
    };
    reader.readAsDataURL(file);
  }

  private createPokemon(form: FormGroup) {
    const base64String = this.imageUrl as string;
    const pokemon: InsertedPokemon = {
      type: form.value.type.id,
      name: form.value.name,
      image: base64String.split(',')[1],
    };

    console.log('pokemon a insertar', pokemon);
    this.pokemonSercice.savePokemon(pokemon);

    //TODO: ya se insertan los pokemons bien en la DB. Hay que corregir el backend para ver
    // si hace falta crear DAOs aparte de los DTO y hacer que el FE cierre el modal y muestre
    //la tabla con el pokemon nuevo insertado
  }

  public interpolateImgSource(image: string) {
    return `data:image/png;base64,${image}`;
  }

  // public uploadFile(uploader: NxFileUploaderComponent) {
  //   uploader.uploadFiles();
  // }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
