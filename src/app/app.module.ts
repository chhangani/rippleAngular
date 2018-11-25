import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MovieServiceService } from './movie-service.service';
import { PlaylistComponent } from './playlist/playlist.component';
import {HttpClientModule, HttpHandler, HttpClient} from "@angular/common/http";
import { SearchResultComponent } from './search-result/search-result.component';
import { CardpageComponent } from './cardpage/cardpage.component';
import { CardsComponent } from './cards/cards.component';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteComponent,
    PlaylistComponent,
    SearchResultComponent,
    CardpageComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
