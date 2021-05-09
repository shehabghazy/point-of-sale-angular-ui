import { TestBed } from '@angular/core/testing';

import { BookConfigService } from './book-config.service';

describe('BookConfigService', () => {
  let service: BookConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
