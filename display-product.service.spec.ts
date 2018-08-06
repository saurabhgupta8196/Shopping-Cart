import { TestBed, inject } from '@angular/core/testing';

import { DisplayProductService } from './display-product.service';

describe('DisplayProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayProductService]
    });
  });

  it('should be created', inject([DisplayProductService], (service: DisplayProductService) => {
    expect(service).toBeTruthy();
  }));
});
