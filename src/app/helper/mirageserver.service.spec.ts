import { TestBed } from '@angular/core/testing';

import { MirageserverService } from './mirageserver.service';

describe('MirageserverService', () => {
  let service: MirageserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MirageserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
