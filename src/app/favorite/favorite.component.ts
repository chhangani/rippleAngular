import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  movies : Movie[];
  constructor(private route: ActivatedRoute,
    private userService:MovieServiceService,
    private router: Router
   ){
   }

  ngOnInit() {
    this.userService.favResult()
      .subscribe( data => {
        this.movies = data;
      });
  };
  public deleteFav(movieId){
    this.userService.delFav(movieId)
    .subscribe( data => {
      console.log("Updating Result");
      this.userService.favResult()
      .subscribe( data => {
        this.movies = data;
      });
    });
    
  }

}
