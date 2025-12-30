import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  primeiroNumero: number = 0;
  segundoNumero: number = 0;
  resultado: number = 0;

  calculaResultado() {
    console.log("Primeiro número: " + this.primeiroNumero);
    console.log("Segundo número: " + this.segundoNumero);
    this.resultado = this.primeiroNumero + this.segundoNumero;
  }
}
