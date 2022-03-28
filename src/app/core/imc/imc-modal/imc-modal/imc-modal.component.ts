import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IPersonBMI } from '../../interfaces/IPersonBMI';

@Component({
  selector: 'app-imc-modal',
  templateUrl: './imc-modal.component.html',
  styleUrls: ['./imc-modal.component.scss'],
})
export class ImcModalComponent implements OnInit {
  @Input() data: IPersonBMI = {} as IPersonBMI;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
