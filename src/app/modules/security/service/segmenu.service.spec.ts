import { TestBed, inject } from '@angular/core/testing';

import { SegmenuService } from './segmenu.service';

describe('SegmenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SegmenuService]
    });
  });

  it('should be created', inject([SegmenuService], (service: SegmenuService) => {
    expect(service).toBeTruthy();
  }));
});
