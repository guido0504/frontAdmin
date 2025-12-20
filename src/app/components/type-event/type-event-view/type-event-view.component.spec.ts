import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEventViewComponent } from './type-event-view.component';

describe('TypeEventViewComponent', () => {
  let component: TypeEventViewComponent;
  let fixture: ComponentFixture<TypeEventViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeEventViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeEventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
