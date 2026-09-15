import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  standalone: false,
  templateUrl: './exercicio9.html',
  styleUrl: './exercicio9.scss',
})
export class Exercicio9 {
  quantidade = 0;
  adicionar() {
    this.quantidade++;
  }
  subtrair() {
      this.quantidade--;
  }
}
