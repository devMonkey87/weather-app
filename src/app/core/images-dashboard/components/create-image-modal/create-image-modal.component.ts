import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { PokemonType } from '../../interfaces';
import { TypesService } from '../../services/types.service';

@Component({
  selector: 'app-create-image-modal',
  templateUrl: './create-image-modal.component.html',
  styleUrls: ['./create-image-modal.component.scss'],
})
export class CreateImageModalComponent implements OnInit {
  uploadedFiles: any[] = [];
  form!: UntypedFormGroup;
  types: PokemonType[] = [];

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly typesService: TypesService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadTypes();
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: [undefined, Validators.required],
      image: ['', Validators.required],
    });
  }

  loadTypes(): void {
    this.typesService.getTypes().then((typePromises) => {
      Promise.all(typePromises).then((resolvedTypes) => {
        this.types = resolvedTypes;
        console.log('TIOIS' + resolvedTypes[0].icon.id);
      });
    });
  }

  public test() {
    //console.log(this.form.value);
  }

  public interpolateImgSource(image: string) {
    return `data:image/png;base64,${image}`;
  }

  public onBasicUploadAuto(event: any) {
    console.log('fichero', event);
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(
        '🚀 ~ file: dynamic-form-modal.component.ts ~ line 39 ~ DynamicFormModalComponent ~ onBasicUploadAuto ~ uploadedFiles',
        this.uploadedFiles
      );

      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedFiles[0]);
      reader.onload = () => {
        console.log(reader.result);
      };
    }
  }
}
