import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {

  public mensaje!: Mensaje

  crearmensaje(tit: string, desc: string, tip: string) {
    let divmensaje: HTMLElement = document.getElementById('mensaje')!;
    divmensaje.textContent = ""
    let titulo: HTMLElement = document.createElement('span');
    let descripcion: HTMLElement = document.createElement('p');
    titulo.textContent = tit
    descripcion.textContent = desc

    switch (tip) {
      case 'info':
        divmensaje.style.border = '2px solid blue'
        break;
      case 'exito':
        divmensaje.style.border = '2px solid green'
        break;
      case 'aviso':
        divmensaje.style.border = '2px solid yellow'
        break;
      case 'error':
        divmensaje.style.border = '2px solid red'
        break;
    }

    divmensaje.appendChild(titulo);
    divmensaje.appendChild(descripcion);

  }


}
