import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-modal',
  templateUrl: './dynamic-form-modal.component.html',
  styleUrls: ['./dynamic-form-modal.component.scss'],
})
export class DynamicFormModalComponent implements OnInit {
  @Input() form!: FormGroup;

  size: string[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.size = Object.keys(this.form.controls);
    console.log(this.size);
  }

  public test() {
    console.log(this.form.value)
  }
}
