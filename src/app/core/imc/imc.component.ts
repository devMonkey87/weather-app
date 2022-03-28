import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImcModalComponent } from './imc-modal/imc-modal/imc-modal.component';
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
  data: IPersonBMI = {} as IPersonBMI;

  closeResult = '';

  constructor(
    private fb: FormBuilder,
    private imcService: ImcService,
    private modalService: NgbModal
  ) {}

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

      const personData = this.form.value;

      this.test(personData);
    } else {this.resultado = 'Hay datos inválidos en el formulario'};
  }

  async test(personData: any) {
    // this.data = await this.imcService.getData(personData); //TODO skip to save data API
    this.data = { height: 1.75, weight: 80, bmi: 24.33 };
    this.openModal(this.data);
  }

  private openModal(data: IPersonBMI) {
    const modalRef = this.modalService.open(ImcModalComponent, {
      ariaLabelledBy: 'modal-basic-title',
    });
    modalRef.componentInstance.data = data;
  }
}
