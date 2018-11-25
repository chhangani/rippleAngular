import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComponent } from './favorite.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [ RouterTestingModule ],
      declarations: [ FavoriteComponent ],
      providers: [HttpClientModule,HttpClient,HttpHandler,{provide: ActivatedRoute, useValue: fakeActivatedRoute} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
