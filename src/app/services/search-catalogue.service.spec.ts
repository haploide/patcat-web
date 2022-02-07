import { TestBed } from '@angular/core/testing';

import { SearchCatalogueService } from './search-catalogue.service';

describe('SearchCatalogueService', () => {
  let service: SearchCatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCatalogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
