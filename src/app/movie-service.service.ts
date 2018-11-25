import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie.model';
import { ActivatedRoute, Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  movies : Movie[];
  constructor(private http:HttpClient) {}
  private searchUrl = 'http://localhost:8001/search/kal';
  private favUrl = 'http://localhost:8001/my/fav';
  private deleteFav = 'http://localhost:8001/deleteFav';
  public method1(){
    this.searchResult()
      .subscribe( data => {
        console.log("Yaha bhi aa hi raha hai");
        this.movies = data;
      });
    return this.movies;
  }
  public searchResult() {
    // this.movies = this.http.get<Movie[]>(this.searchUrl).subscribe(data=>{
    //   this
    // });
    // console.log("Vib " + Object.keys());
    return this.http.get<Movie[]>(this.searchUrl);
  }
  public favResult(){
    return this.http.get<Movie[]>(this.favUrl);
  }
  public delFav(movieId){
    return this.http.post<number>(this.deleteFav,movieId); 
  }
}
