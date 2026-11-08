import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoCard } from '../../shared/produto-card/produto-card';
import { ProdutoService } from '../../core/produto';
import { Categoria } from '../../core/produto.model';

@Component({
  selector: 'app-catalogo',
  imports: [FormsModule, ProdutoCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo {
  private readonly produtoService = inject(ProdutoService);

  readonly categorias = this.produtoService.categorias();
  readonly categoriaAtiva = signal<Categoria | 'Todas'>('Todas');
  readonly termoBusca = signal('');

  readonly produtosFiltrados = computed(() => {
    const porCategoria = this.produtoService.listarPorCategoria(this.categoriaAtiva());
    const termo = this.termoBusca().trim().toLowerCase();
    if (!termo) {
      return porCategoria;
    }
    return porCategoria.filter((p) => p.nome.toLowerCase().includes(termo));
  });

  selecionarCategoria(categoria: Categoria | 'Todas'): void {
    this.categoriaAtiva.set(categoria);
  }
}
