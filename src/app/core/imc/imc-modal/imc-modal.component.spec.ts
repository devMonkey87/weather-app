import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IPersonBMI } from '../interfaces/IPersonBMI';

import { ImcModalComponent } from './imc-modal.component';

describe('ImcModalComponent', () => {
  let component: ImcModalComponent;
  let fixture: ComponentFixture<ImcModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImcModalComponent],
      providers: [NgbActiveModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let x :IPersonBMI[] = [{height: 2, weight: 3}];
    component.data = x;
    console.log('aaa', component)
    expect(component).toBeTruthy();
  });
});
