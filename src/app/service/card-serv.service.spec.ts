import { TestBed } from '@angular/core/testing';

import { CardServService } from './card-serv.service';

describe('CardServService', () => {
  let service: CardServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
