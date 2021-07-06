import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NehruComponent } from './nehru.component';

describe('NehruComponent', () => {
  let component: NehruComponent;
  let fixture: ComponentFixture<NehruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NehruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NehruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
