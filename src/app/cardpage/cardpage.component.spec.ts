import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpageComponent } from './cardpage.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CardsComponent } from '../cards/cards.component';
import { Http, HttpModule } from '@angular/http';
import { HttpHandler, HttpClient, HttpClientModule } from '@angular/common/http';

describe('CardpageComponent', () => {
  let component: CardpageComponent;
  let fixture: ComponentFixture<CardpageComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [ RouterTestingModule ],
      declarations: [ CardpageComponent,CardsComponent ],

      providers: [HttpClientModule,HttpModule,HttpClient,HttpHandler,Http,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
