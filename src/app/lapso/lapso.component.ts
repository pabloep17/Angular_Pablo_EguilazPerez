import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lapso',
  templateUrl: './lapso.component.html',
  styleUrls: ['./lapso.component.css']
})
export class LapsoComponent {

  @Input() lapsos: number[] = [];

  formatNumber(n:number) {
    let segundos = n
    let minutos = 0
    let horas = 0
    while(segundos > 59) {
      segundos -= 60
      minutos += 1
    }
    while(minutos > 59) {
      minutos -= 60
      horas += 1
    }

    return `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`
  }

}
