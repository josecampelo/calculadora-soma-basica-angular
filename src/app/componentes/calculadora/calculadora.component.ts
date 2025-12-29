import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  primeiroNumero: number = 0;
  segundoNumero: number = 0;
  resultado: number = 0;

  calculaResultado() {
    this.resultado = this.primeiroNumero + this.segundoNumero;
  }
}
