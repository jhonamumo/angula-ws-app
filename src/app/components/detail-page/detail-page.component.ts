import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  public movieId:number = 0;
  public movie?: Movie;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loadParams();
    this.loadMovieById();
  }

  private loadParams(): void{
    this.route.params.subscribe(params => {
      const id = Number(params.id);
      this.movieId = id;
    });
  }

  private loadMovieById(): void {
    this.movie = this.moviesService.getById(this.movieId);
  }

}
