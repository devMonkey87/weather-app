import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesDashboardComponent } from './images-dashboard.component';

describe('ImagesDashboardComponent', () => {
  let component: ImagesDashboardComponent;
  let fixture: ComponentFixture<ImagesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
