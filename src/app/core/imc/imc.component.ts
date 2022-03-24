import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPersonBMI } from './interfaces/IPersonBMI';
import { ImcService } from './services/imc.service';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss'],
})
export class ImcComponent implements OnInit {
  resultado: string = ''; //FIXME mejorar error messages
  form!: FormGroup;
  data: any;
  constructor(private fb: FormBuilder, private imcService: ImcService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      height: [0, Validators.required],
      weight: [0, Validators.required],
    });
  }

  submit() {
    if (this.form && this.form.valid) {
      this.resultado = 'Todos los datos son válidos';

      const personData = {
        height: this.form.controls.height.value,
        weight: this.form.controls.weight.value,
      }

      console.log('se informa ok', personData)
      this.test(personData);
    } else this.resultado = 'Hay datos inválidos en el formulario';
  }

  async test(personData:any) {
    this.data =  await this.imcService.initData(personData); //TODO add await
    
    setTimeout(() => {
      console.log(
        '🚀 ~ file: imc.component.ts ~ line 37 ~ ImcComponent ~ submit ~ data',
        this.data
      );
    }, 5000);
 
  }
}
