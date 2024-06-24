import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardInfoComponent } from './wizard-info.component';

describe('WizardInfoComponent', () => {
  let component: WizardInfoComponent;
  let fixture: ComponentFixture<WizardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WizardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
