import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { TypesService } from '../../services/types.service';

@Component({
  selector: 'app-create-image-modal',
  templateUrl: './create-image-modal.component.html',
  styleUrls: ['./create-image-modal.component.scss'],
})
export class CreateImageModalComponent implements OnInit {
  uploadedFiles: any[] = [];
  form!: UntypedFormGroup;

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

  loadTypes() {
    let x = this.typesService.getTypes();
    setTimeout(() => {
      console.log(x);
    }, 600);
  }

  public test() {
    //console.log(this.form.value);
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
