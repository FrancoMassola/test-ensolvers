import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAddFolderComponent } from './input-add-folder.component';

describe('InputAddFolderComponent', () => {
  let component: InputAddFolderComponent;
  let fixture: ComponentFixture<InputAddFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAddFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAddFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
