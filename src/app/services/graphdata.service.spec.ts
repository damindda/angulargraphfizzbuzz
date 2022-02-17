import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { GraphdataService } from './graphdata.service';

describe('GraphdataService', () => {
  let service: GraphdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(GraphdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
