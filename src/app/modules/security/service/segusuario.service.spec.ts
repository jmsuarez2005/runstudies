import { TestBed, inject } from '@angular/core/testing';

import { SegusuarioService } from './segusuario.service';

describe('SegusuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SegusuarioService]
    });
  });

  it('should be created', inject([SegusuarioService], (service: SegusuarioService) => {
    expect(service).toBeTruthy();
  }));
});
