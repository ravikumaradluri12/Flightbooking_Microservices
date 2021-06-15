import { TestBed } from '@angular/core/testing';

import { ViewBookingHistoryService } from './view-booking-history.service';

describe('ViewBookingHistoryService', () => {
  let service: ViewBookingHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBookingHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
