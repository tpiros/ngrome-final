import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trailer2Component } from './trailer2.component';

describe('Trailer2Component', () => {
  let component: Trailer2Component;
  let fixture: ComponentFixture<Trailer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trailer2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Trailer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
