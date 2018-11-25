import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { CardpageComponent } from '../cardpage/cardpage.component';
import { Http, HttpModule } from '@angular/http';
import { HttpHandler, HttpClient, HttpClientModule } from '@angular/common/http';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule,HttpModule,HttpClient,HttpHandler,Http ],

      declarations: [ CardsComponent,CardpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
