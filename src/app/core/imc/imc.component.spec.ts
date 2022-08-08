import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ImcComponent } from './imc.component';
import { ImcService } from './services/imc.service';

describe('ImcComponent', () => {
  let component: ImcComponent;
  let fixture: ComponentFixture<ImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImcComponent],
      imports: [BrowserAnimationsModule],
      providers: [
        { provide: FormBuilder, useClass: FormBuilderMock },
        { provide: ImcService, useClass: ImcServiceMock },
        { provide: NgbActiveModal, useClass: NgbActiveModalMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  class FormBuilderMock {
    group() {
      return null;
    }
  }

  class ImcServiceMock {
    getData() {
      return null;
    }
  }

  class NgbActiveModalMock {
    open() {
      return null;
    }
  }
});
