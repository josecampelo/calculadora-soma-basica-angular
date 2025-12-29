import { Component } from '@angular/core';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  imports: [CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculadora-soma-basica-angular';
}
