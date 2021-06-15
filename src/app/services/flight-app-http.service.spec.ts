import { TestBed } from '@angular/core/testing';

import { FlightAppHttpService } from './flight-app-http.service';

describe('FlightAppHttpService', () => {
  let service: FlightAppHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightAppHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
