import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Pokemon, PokemonType } from '../../interfaces';
import { PokemonService } from '../../services/pokemon.service';
import { TypesService } from '../../services/types.service';

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

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly typesService: TypesService,
    private readonly pokemonSercice: PokemonService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadTypes();
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      image: [''],
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
    this.processForm(this.form);
    this.createPokemon(this.form);
  }

  private processForm(form: FormGroup) {
    this.form.patchValue({ type: form.value.type.id });
  }

  private createPokemon(form: FormGroup) {
    const pokemon: Pokemon = {
      type: {
        type: form.value.type,
        description: 'd',
        icon: { data: btoa('ssss') },
      },
      name: form.value.name,
      image: { image: btoa('tbd'), description: 'test', isSelected: false },
    };

    console.log('pokemon', pokemon);
    this.pokemonSercice.savePokemon(pokemon);
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
