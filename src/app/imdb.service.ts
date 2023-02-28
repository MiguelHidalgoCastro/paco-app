import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class IMDBService {
  constructor(
    private http: HttpClient) {
  }

  getLista(url: string): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(url)
  }

  /**getLista(): any {
    let busqueda: any = document.getElementById('npelicula')
    let quebusco: string = busqueda.value
    //console.log(quebusco)

    let url = "https://imdb-api.com/en/API/SearchMovie/k_1uxldlee/" + quebusco
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.peliculas = []
        // console.log(data.results.length)
        for (let i = 0; i < data.results.length; i++) {
          const element = data.results[i];
          // console.log(element);
          this.peliculas.push(element)
        }
        
      });

      return this.http.get()
  } */

}