/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SinglePostServiceService } from './single-post-service.service';

describe('SinglePostServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SinglePostServiceService]
    });
  });

  it('should ...', inject([SinglePostServiceService], (service: SinglePostServiceService) => {
    expect(service).toBeTruthy();
  }));
});
