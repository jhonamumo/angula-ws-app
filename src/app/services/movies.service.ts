import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movies: Array<Movie> = [
    {
      id: 1,
      title: 'Titanic',
      description: 'Un barco se hunde en la mitad del pacifico',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png'
    },
    {
      id: 2,
      title: 'Cruella',
      description: 'Cruella la villana de los dalmatas',
      image: 'https://es.web.img3.acsta.net/pictures/21/04/21/11/08/5393301.jpg'
    },
    {
      id: 3,
      title: 'Rápido y furiosos',
      description: 'Carros y aventura es lo ofrece esta gran pelicula',
      image: 'https://procinal.com/uploads/PELICULAS/Img_movies/Img_360x500/FF9nuevoposter.jpg'
    }
  ];

  constructor() { }

  public getAll(): Array<Movie> {
    return this.movies;
  }

  public getById(id: number): Movie | undefined {
    return this.movies.find(el => el.id === id);
  }

}
