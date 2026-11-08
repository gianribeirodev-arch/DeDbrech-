import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoCard } from '../../shared/produto-card/produto-card';
import { ProdutoService } from '../../core/produto';
import { Produto } from '../../core/produto.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProdutoCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly produtoService = inject(ProdutoService);

  destaques: Produto[] = this.produtoService.destaques(4);
}
