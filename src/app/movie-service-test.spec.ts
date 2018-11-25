import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { MovieServiceService } from './movie-service.service';
import { Movie } from './movie.model';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('Movie Vibhanshu Service', () => {

    let hccService: MovieServiceService;
    let backend: MockBackend;
    beforeEach(() => {
        TestBed.configureTestingModule({

            declarations: [],
            providers: [MovieServiceService,HttpClientModule,HttpClient,HttpHandler,
                { provide: XHRBackend, useClass: MockBackend }],
            imports: [HttpModule]
        });

        hccService = TestBed.get(MovieServiceService);
        backend = TestBed.get(XHRBackend);
    });

    it('Movie Vibhanshu Service', () => {
        let fakeData = new Movie();
        fakeData.movieId=1;
        fakeData.movieDescription="Hi";
        fakeData.movieName="A";
        fakeData.moviePosterUrl="img.jpg";
        fakeData.movieReleaseDate= new Date("1997-08-08");

        let options = new ResponseOptions({
            status: 200, body: fakeData
        });
        
        let response = new Response(options);
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
        console.log("Vibhanshu" + Object.keys(hccService));
        hccService.searchResult().subscribe((data) => {
            console.log(data);
            expect(data.length).toBe(2);
        }, (error) => {
        console.log(error);
        }
           // 
        )
    })

})
