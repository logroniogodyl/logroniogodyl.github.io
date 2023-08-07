import { Component } from '@angular/core';

@Component({
  selector: 'app-chisiamo',
  templateUrl: './chisiamo.component.html',
  styleUrls: ['./chisiamo.component.css']
})
export class ChisiamoComponent {

  mostraNumero: boolean = false;

  alternaTesto() {
    this.mostraNumero = !this.mostraNumero;
  }
}
