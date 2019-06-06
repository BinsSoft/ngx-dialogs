import { TestBed } from '@angular/core/testing';

import { NgxDialogsService } from './ngx-dialogs.service';

describe('NgxDialogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDialogsService = TestBed.get(NgxDialogsService);
    expect(service).toBeTruthy();
  });
});
