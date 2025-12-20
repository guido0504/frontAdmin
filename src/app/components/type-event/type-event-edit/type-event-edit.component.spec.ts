import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEventEditComponent } from './type-event-edit.component';

describe('TypeEventEditComponent', () => {
  let component: TypeEventEditComponent;
  let fixture: ComponentFixture<TypeEventEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeEventEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeEventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
