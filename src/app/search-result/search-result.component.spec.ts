import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponent } from './search-result.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpHandler, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [ RouterTestingModule ],
      declarations: [SearchResultComponent ],
      providers: [HttpClientModule,HttpModule,HttpClient,HttpHandler,Http,{provide: ActivatedRoute, useValue: fakeActivatedRoute} ],
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let headers = new HttpHeaders();
        headers  = headers.append('header-1', 'value-1');
    let params = new HttpParams();
       params = params.append('param-1', 'value-1');

    expect(component).toBeTruthy();
  });
});
