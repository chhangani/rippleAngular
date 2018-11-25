import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() myMovies: Movie[];
  constructor() { 
    //alert(this.myMovies.length + "Hi");
  }

  ngOnInit() {
  }

}
