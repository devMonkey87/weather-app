import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss'],
})
export class ImcComponent implements OnInit {
  resultado: string = ''; //FIXME mejorar error messages
  form: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.form.valid) this.resultado = 'Todos los datos son válidos';
    else this.resultado = 'Hay datos inválidos en el formulario';
  }
}
