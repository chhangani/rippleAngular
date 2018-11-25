import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CardpageComponent } from './cardpage/cardpage.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:HomeComponent},
  {path:'favorite',component:FavoriteComponent},
  {path:'play',component:FavoriteComponent},
  {path:'searchresult',component:SearchResultComponent},
  {path:'cardpage',component:CardpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
