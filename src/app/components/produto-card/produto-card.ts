import { Component, input } from '@angular/core';
import { Produto } from '../../core/produto.model';

@Component({
  selector: 'app-produto-card',
  imports: [],
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.scss',
})
export class ProdutoCard {
  produto = input.required<Produto>();

  get desconto(): number {
    const { preco, precoOriginal } = this.produto();
    return Math.round(100 - (preco / precoOriginal) * 100);
  }
}
