import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faRulerHorizontal, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImcModalComponent } from './imc-modal/imc-modal/imc-modal.component';
import { IPersonBMI } from './interfaces/IPersonBMI';
import { ImcService } from './services/imc.service';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss'],
  animations: [
    trigger('inOut', [
      transition('void => *', [
        style({ opacity: 0 }), // initial styles
        animate(
          '2000ms',
          style({ opacity: 1 }) // final style after the transition has finished
        ),
      ]),
      transition('* => void', [
        animate(
          '2000ms',
          style({ opacity: 0 }) // we asume the initial style will be always opacity: 1
        ),
      ]),
    ]),
  ],
})
export class ImcComponent implements OnInit {
  resultado: string = ''; //FIXME mejorar error messages
  form!: FormGroup;
  data: IPersonBMI = {} as IPersonBMI;
  // icons
  faRulerHorizontal = faRulerHorizontal;
  faWeightHanging = faWeightHanging;

  

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
    } else {
      this.resultado = 'Hay datos inválidos en el formulario';
    }
  }

  async test(personData: any) {
    this.data = await this.imcService.getData(personData); //TODO skip to save data API
    // this.data = { height: 1.75, weight: 80, bmi: 24.33 };
    this.openModal(this.data);
  }

  private openModal(data: IPersonBMI) {
    const modalRef = this.modalService.open(ImcModalComponent, {
      centered: true,
      windowClass: 'test',
    });
    let xx = [];
    xx.push(data);
    modalRef.componentInstance.data = xx;
  }
}
