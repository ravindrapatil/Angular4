/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirebasedbdataService } from './firebasedbdata.service';

describe('FirebasedbdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebasedbdataService]
    });
  });

  it('should ...', inject([FirebasedbdataService], (service: FirebasedbdataService) => {
    expect(service).toBeTruthy();
  }));
});
