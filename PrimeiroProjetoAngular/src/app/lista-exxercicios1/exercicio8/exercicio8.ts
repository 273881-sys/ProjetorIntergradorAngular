import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio8',
  standalone: false,
  templateUrl: './exercicio8.html',
  styleUrl: './exercicio8.scss',
})
export class Exercicio8 {
  Produto: string = '';
  Preco: number = 0;
  Quantidade: number = 0;
  calcularTotal(): number {
    return this.Preco * this.Quantidade;
  }

}
