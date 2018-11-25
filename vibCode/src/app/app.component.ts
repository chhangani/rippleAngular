import { Component } from '@angular/core';
import { Movie } from './movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from './movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: ActivatedRoute,
    private userService:MovieServiceService,
    private router: Router
   ){
   }

  ngOnInit() {
  };
}
