import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-modal',
  templateUrl: './dynamic-form-modal.component.html',
  styleUrls: ['./dynamic-form-modal.component.scss'],
})
export class DynamicFormModalComponent implements OnInit {
  @Input() form!: FormGroup;

  inputControls: string[] = [];

  uploadedFiles: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.inputControls = Object.keys(this.form.controls);
  }

  public test() {
    console.log(this.form.value);
  }

  public onBasicUploadAuto(event: any) {
    console.log("fichero", event);
      for (let file of event.files) {
        this.uploadedFiles.push(file);
        console.log("🚀 ~ file: dynamic-form-modal.component.ts ~ line 39 ~ DynamicFormModalComponent ~ onBasicUploadAuto ~ uploadedFiles", this.uploadedFiles)

        const reader = new FileReader();
        reader.readAsDataURL(this.uploadedFiles[0]);
        reader.onload = () => {
          console.log(reader.result);
        };
        
      }
  }
}
