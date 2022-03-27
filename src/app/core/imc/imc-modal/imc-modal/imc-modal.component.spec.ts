import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcModalComponent } from './imc-modal.component';

describe('ImcModalComponent', () => {
  let component: ImcModalComponent;
  let fixture: ComponentFixture<ImcModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
