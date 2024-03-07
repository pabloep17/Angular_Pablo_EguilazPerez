import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {

  saludo:string = "Hola, ¿que tal estás?"

  ngOnInit() {
    const saludado = localStorage.getItem("saludado")

    this.saludo = saludado == null ? "Hola, ¿que tal estás?" : "Hola de nuevo"
    localStorage.setItem("saludado", "true")
  }

}
