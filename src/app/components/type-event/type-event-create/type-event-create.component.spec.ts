import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEventCreateComponent } from './type-event-create.component';

describe('TypeEventCreateComponent', () => {
  let component: TypeEventCreateComponent;
  let fixture: ComponentFixture<TypeEventCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeEventCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeEventCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
