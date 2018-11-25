import { TestBed, async } from '@angular/core/testing';

import { MovieServiceService } from './movie-service.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchResultComponent } from './search-result/search-result.component';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('MovieServiceService', () => {
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [ RouterTestingModule ],
      declarations: [],
      providers: [HttpClientModule,HttpClient,HttpHandler,{provide: ActivatedRoute, useValue: fakeActivatedRoute} ],
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: MovieServiceService = TestBed.get(MovieServiceService);
    expect(service).toBeTruthy();
  });
});
