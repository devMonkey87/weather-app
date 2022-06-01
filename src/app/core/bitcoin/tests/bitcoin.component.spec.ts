import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinComponent } from '../components/bitcoin.component';
import { BitcoinService } from '../services/bitcoin.service';

describe('BitcoinComponent',async () => {
  let component: BitcoinComponent;
  let fixture: ComponentFixture<BitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: BitcoinService, useClass: BitcoinServiceMock }],
      declarations: [BitcoinComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  class BitcoinServiceMock {
    getData() {
      return null;
    }
  }
});
