import { Component, OnInit } from '@angular/core';
import { Movie } from './models/Movie';
import { MoviesService } from './services/movies.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: String = 'angula-ws-app';
  public nombre: String = 'Jhonatan'
  public showData: boolean = true;
  //public nombreButton: String = "ocultame";
  public movies: Array<Movie> = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  public mostrarOcultarDatos(): void {
    this.showData = !this.showData;
    //this.nombreButton = this.showData? "ocultame" : "muestrame";
  }

  private loadMovies(): void {
    this.movies = this.moviesService.getAll();
  }
}
