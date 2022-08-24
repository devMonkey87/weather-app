import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-image-modal',
  templateUrl: './create-image-modal.component.html',
  styleUrls: ['./create-image-modal.component.scss'],
})
export class CreateImageModalComponent implements OnInit {
  uploadedFiles: any[] = [];
  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: [''],
      image: ['', Validators.required],
    });
  }

  public test() {}

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
