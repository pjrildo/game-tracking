import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlataformComponent } from './create-plataform.component';

describe('CreatePlataformComponent', () => {
  let component: CreatePlataformComponent;
  let fixture: ComponentFixture<CreatePlataformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlataformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlataformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
