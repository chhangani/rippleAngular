import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie.model';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  movies : Movie[];
  constructor(private route: ActivatedRoute,
    private userService:MovieServiceService,
    private router: Router
   ){
   }

  ngOnInit() {
    this.userService.searchResult()
      .subscribe( data => {
        this.movies = data;
      });
  };

}
