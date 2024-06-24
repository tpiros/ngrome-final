import { TestBed } from '@angular/core/testing';

import { SpeculationRulesService } from './speculation-rules.service';

describe('SpeculationRulesService', () => {
  let service: SpeculationRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeculationRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
