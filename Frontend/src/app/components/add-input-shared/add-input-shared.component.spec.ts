import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInputSharedComponent } from './add-input-shared.component';

describe('AddInputSharedComponent', () => {
  let component: AddInputSharedComponent;
  let fixture: ComponentFixture<AddInputSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInputSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInputSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
