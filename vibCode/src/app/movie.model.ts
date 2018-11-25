export class Movie {
	  movieId: number;
	  movieName : string;
	  moviePosterUrl : string;
	  movieReleaseDate : Date;
	  movieDescription : string;

	  constructor(obj?){
		  this.movieId == obj && obj.movieId ? obj.movieId : 0;
		  this.movieDescription = obj && obj.movieDescription ? obj.movieDescription : "";
			this.movieReleaseDate =obj && obj.movieReleaseDate ? obj.movieReleaseDate : new Date();
			this.movieName = obj && obj.movieName ? obj.movieName : "";
			this.moviePosterUrl= obj && obj.moviePosterUrl ? obj.moviePosterUrl : "";

		}
}
