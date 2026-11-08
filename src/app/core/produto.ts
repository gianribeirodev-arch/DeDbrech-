import { Injectable } from '@angular/core';
import { Categoria, Produto } from './produto.model';

const PRODUTOS: Produto[] = [
  {
    id: 1,
    nome: 'Vestido midi linho terracota',
    categoria: 'Vestidos',
    tamanho: 'M',
    preco: 89,
    precoOriginal: 220,
    condicao: 'Muito bom estado',
    emoji: '👗',
    descricao: 'Linho leve em tom terracota, caimento solto, perfeito para dias quentes.',
  },
  {
    id: 2,
    nome: 'Camisa xadrez ocre vintage',
    categoria: 'Camisas',
    tamanho: 'G',
    preco: 59,
    precoOriginal: 140,
    condicao: 'Seminova',
    emoji: '👔',
    descricao: 'Flanela xadrez em tons de ocre e barro, garimpada dos anos 90.',
  },
  {
    id: 3,
    nome: 'Calça alfaiataria bege',
    categoria: 'Calças',
    tamanho: '40',
    preco: 75,
    precoOriginal: 180,
    condicao: 'Muito bom estado',
    emoji: '👖',
    descricao: 'Corte reto em bege areia, tecido estruturado com caimento atemporal.',
  },
  {
    id: 4,
    nome: 'Jaqueta jeans barro',
    categoria: 'Jaquetas',
    tamanho: 'P',
    preco: 110,
    precoOriginal: 260,
    condicao: 'Bom estado',
    emoji: '🧥',
    descricao: 'Jeans lavado em tingimento terroso, forro quentinho para o inverno.',
  },
  {
    id: 5,
    nome: 'Bolsa de palha trançada',
    categoria: 'Acessórios',
    tamanho: 'Único',
    preco: 49,
    precoOriginal: 120,
    condicao: 'Muito bom estado',
    emoji: '👜',
    descricao: 'Palha trançada à mão, alças de couro envelhecido.',
  },
  {
    id: 6,
    nome: 'Vestido longo verde-oliva',
    categoria: 'Vestidos',
    tamanho: 'P',
    preco: 95,
    precoOriginal: 230,
    condicao: 'Seminova',
    emoji: '👗',
    descricao: 'Viscose fluida verde-oliva, fenda lateral e botões de madeira.',
  },
  {
    id: 7,
    nome: 'Camisa social cal',
    categoria: 'Camisas',
    tamanho: 'M',
    preco: 55,
    precoOriginal: 130,
    condicao: 'Muito bom estado',
    emoji: '👔',
    descricao: 'Tricoline cor de cal, gola clássica, ótima para compor looks de trabalho.',
  },
  {
    id: 8,
    nome: 'Calça pantalona terracota',
    categoria: 'Calças',
    tamanho: '38',
    preco: 68,
    precoOriginal: 160,
    condicao: 'Bom estado',
    emoji: '👖',
    descricao: 'Pantalona fluida em terracota, cintura alta com amarração.',
  },
  {
    id: 9,
    nome: 'Jaqueta de couro marrom-barro',
    categoria: 'Jaquetas',
    tamanho: 'M',
    preco: 189,
    precoOriginal: 420,
    condicao: 'Bom estado',
    emoji: '🧥',
    descricao: 'Couro legítimo envelhecido, acabamento aveludado como o revestimento de cal.',
  },
  {
    id: 10,
    nome: 'Brincos de cerâmica arco',
    categoria: 'Acessórios',
    tamanho: 'Único',
    preco: 29,
    precoOriginal: 70,
    condicao: 'Novo',
    emoji: '💍',
    descricao: 'Cerâmica artesanal em formato de arco, inspirada na arquitetura vernacular.',
  },
  {
    id: 11,
    nome: 'Vestido curto bege texturizado',
    categoria: 'Vestidos',
    tamanho: 'G',
    preco: 72,
    precoOriginal: 170,
    condicao: 'Muito bom estado',
    emoji: '👗',
    descricao: 'Tricô texturizado bege, manga bufante e botões forrados.',
  },
  {
    id: 12,
    nome: 'Camisa cropped verde-oliva',
    categoria: 'Camisas',
    tamanho: 'P',
    preco: 45,
    precoOriginal: 110,
    condicao: 'Seminova',
    emoji: '👔',
    descricao: 'Linho cropped verde-oliva, amarração frontal, perfeita pra compor.',
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
