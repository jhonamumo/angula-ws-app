import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: String = 'angula-ws-app';
  public nombre: String = 'Jhonatan'
  public showData: boolean = true;
  //public nombreButton: String = "ocultame";
  public movies = [
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

  public mostrarOcultarDatos(): void {
    this.showData = !this.showData;
    //this.nombreButton = this.showData? "ocultame" : "muestrame";
  }
}
