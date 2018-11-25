import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.css']
})
export class CardpageComponent implements OnInit {
  
movies : Movie[];
vibMovie : String;
  constructor(private route: ActivatedRoute,
    private userService:MovieServiceService,
    private router: Router
   ){
   }

  ngOnInit() {
    this.vibMovie = "Vibhanshu";
    this.userService.favResult()
      .subscribe( data => {
        this.movies = data;
      });
  };

}
