export type Categoria = 'Vestidos' | 'Camisas' | 'Calças' | 'Jaquetas' | 'Acessórios';

export interface Produto {
  id: number;
  nome: string;
  categoria: Categoria;
  tamanho: string;
  preco: number;
  precoOriginal: number;
  condicao: string;
  imagem: string;
  descricao: string;
}
