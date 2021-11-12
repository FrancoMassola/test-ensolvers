import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInputTaskComponent } from './update-input-task.component';

describe('UpdateInputTaskComponent', () => {
  let component: UpdateInputTaskComponent;
  let fixture: ComponentFixture<UpdateInputTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInputTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInputTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
