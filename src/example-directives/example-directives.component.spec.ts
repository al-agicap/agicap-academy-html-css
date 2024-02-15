import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDirectivesComponent } from './example-directives.component';

describe('ExampleDirectivesComponent', () => {
  let component: ExampleDirectivesComponent;
  let fixture: ComponentFixture<ExampleDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
