import { Component } from '@angular/core';
import { Pelicula } from '../pelicula';
import { IMDBService } from '../imdb.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  observable: any

  constructor(private peliculaService: IMDBService) { }

  list() {
    let input: any = document.getElementById('npelicula')
    let url: any = "https://imdb-api.com/en/API/SearchMovie/k_1uxldlee/" + input.value

    this.peliculaService.getLista(url).subscribe(peliculas => this.observable = peliculas)

  }
}
