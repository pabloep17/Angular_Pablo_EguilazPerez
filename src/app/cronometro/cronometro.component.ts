import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {

  contadorValue: number = 0
  sinceLastRecord : number = 0

  playing:boolean = false

  lapsos:number[] = []

  play() {
    this.playing = true
    this.updateCrono()
  }

  stop() {
    this.playing = false
  }

  record() {
    if (this.lapsos.length == 0) {
      this.lapsos.push(this.contadorValue)
    } else {
      this.lapsos.push(this.contadorValue - this.sinceLastRecord)
    }
    this.sinceLastRecord = this.contadorValue
  }

  updateCrono() {
    if (this.playing == true) {
      this.contadorValue += 1
      setTimeout(() => {
        this.updateCrono();
      }, 1000);
    }
  }

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
