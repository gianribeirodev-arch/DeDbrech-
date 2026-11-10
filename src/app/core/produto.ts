import { Injectable } from '@angular/core';
import { Categoria, Produto } from './produto.model';

const PRODUTOS: Produto[] = [
  {
    id: 1,
    nome: 'Vestido midi linho florido',
    categoria: 'Vestidos',
    tamanho: 'M',
    preco: 89,
    precoOriginal: 220,
    condicao: 'Muito bom estado',
    imagem: '/produtos/01-vestido-.png',
    descricao: 'Linho leve florido, caimento solto, perfeito para dias quentes.',
  },
  {
    id: 2,
    nome: 'Camisa vintage',
    categoria: 'Camisas',
    tamanho: 'G',
    preco: 59,
    precoOriginal: 140,
    condicao: 'Seminova',
    imagem: '/produtos/02-camisa.jpg',
    descricao: 'Camisa vintage, garimpada dos anos 2000.',
  },
  {
    id: 3,
    nome: 'Calça skin preta básica',
    categoria: 'Calças',
    tamanho: '40',
    preco: 75,
    precoOriginal: 180,
    condicao: 'Muito bom estado',
    imagem: '/produtos/03-calca-alfaiataria-bege.jpg',
    descricao: 'Corte reto, tecido estruturado com caimento atemporal.',
  },
  {
    id: 4,
    nome: 'Jaqueta de couro',
    categoria: 'Jaquetas',
    tamanho: 'P',
    preco: 110,
    precoOriginal: 260,
    condicao: 'Bom estado',
    imagem: '/produtos/04-jaqueta-jeans-barro.jpg',
    descricao: 'Jaqueta de couro, forro quentinho para o inverno.',
  },
  {
    id: 5,
    nome: 'Bolsa de alça',
    categoria: 'Acessórios',
    tamanho: 'Único',
    preco: 49,
    precoOriginal: 120,
    condicao: 'Muito bom estado',
    imagem: '/produtos/05-bolsa-palha-trancada.jpg',
    descricao: 'Alças de couro envelhecido.',
  },
  {
    id: 6,
    nome: 'Vestido longo branco',
    categoria: 'Vestidos',
    tamanho: 'P',
    preco: 95,
    precoOriginal: 230,
    condicao: 'Seminova',
    imagem: '/produtos/06-vestido.jpg',
    descricao: 'Vestido de renda branca, ótimos para eventos de dia.',
  },
  {
    id: 7,
    nome: 'Camisa regata branca',
    categoria: 'Camisas',
    tamanho: 'M',
    preco: 55,
    precoOriginal: 130,
    condicao: 'Muito bom estado',
    imagem: '/produtos/07-camisa-social-cal.jpg',
    descricao: 'Camisa regata branca, ótimo para dias de trabalho.',
  },
  {
    id: 8,
    nome: 'Calça Social',
    categoria: 'Calças',
    tamanho: '38',
    preco: 68,
    precoOriginal: 160,
    condicao: 'Bom estado',
    imagem: '/produtos/08-calca-pantalona-terracota.jpg',
    descricao: 'Calça social fluida, para o dia a dia do trabalho.',
  },
  {
    id: 9,
    nome: 'Casaco marrom',
    categoria: 'Jaquetas',
    tamanho: 'M',
    preco: 189,
    precoOriginal: 420,
    condicao: 'Bom estado',
    imagem: '/produtos/09-jaqueta-couro-barro.jpg',
    descricao: 'Casaco marrom com acabamento aveludado como o revestimento de cal.',
  },
  {
    id: 10,
    nome: 'Cartira de couro legitimo',
    categoria: 'Acessórios',
    tamanho: 'Único',
    preco: 29,
    precoOriginal: 70,
    condicao: 'Novo',
    imagem: '/produtos/10-bolsa-vermelha.jpg',
    descricao: 'Carteira de couro de crocodilo vermelha, linda para aproveitar um jantar romântico.',
  },
  {
    id: 11,
    nome: 'Vestido longo',
    categoria: 'Vestidos',
    tamanho: 'G',
    preco: 72,
    precoOriginal: 170,
    condicao: 'Muito bom estado',
    imagem: '/produtos/11-vestido.jpg',
    descricao: 'Vestido preto com detalhes em branco com mangas bufante.',
  },
  {
    id: 12,
    nome: 'Camisa branca florida',
    categoria: 'Camisas',
    tamanho: 'P',
    preco: 45,
    precoOriginal: 110,
    condicao: 'Seminova',
    imagem: '/produtos/12-camisa.jpg',
    descricao: 'Camisa branca florida, perfeita para um almoço de domingo.',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  listar(): Produto[] {
    return PRODUTOS;
  }

  listarPorCategoria(categoria: Categoria | 'Todas'): Produto[] {
    if (categoria === 'Todas') {
      return PRODUTOS;
    }
    return PRODUTOS.filter((p) => p.categoria === categoria);
  }

  buscar(termo: string): Produto[] {
    const termoNormalizado = termo.trim().toLowerCase();
    if (!termoNormalizado) {
      return PRODUTOS;
    }
    return PRODUTOS.filter((p) => p.nome.toLowerCase().includes(termoNormalizado));
  }

  categorias(): Categoria[] {
    return ['Vestidos', 'Camisas', 'Calças', 'Jaquetas', 'Acessórios'];
  }

  destaques(quantidade = 4): Produto[] {
    return PRODUTOS.slice(0, quantidade);
  }

  porId(id: number): Produto | undefined {
    return PRODUTOS.find((p) => p.id === id);
  }
}
