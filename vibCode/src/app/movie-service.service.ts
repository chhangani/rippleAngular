import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) {}
  private searchUrl = 'http://localhost:8001/search/kal';
  private favUrl = 'http://localhost:8001/my/fav';
  private deleteFav = 'http://localhost:8001/deleteFav';
  public searchResult() {
    return this.http.get<Movie[]>(this.searchUrl);
  }
  public favResult(){
    return this.http.get<Movie[]>(this.favUrl);
  }
  public delFav(movieId){
    return this.http.post<number>(this.deleteFav,movieId); 
  }
}
