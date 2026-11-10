INSERT INTO categoria (nome) VALUES
  ('Vestidos'),
  ('Camisas'),
  ('Calças'),
  ('Jaquetas'),
  ('Acessórios');

INSERT INTO produto (nome, categoria_id, tamanho, condicao, preco_original, preco, descricao, imagem_url) VALUES
  ('Vestido midi linho florido', (SELECT id FROM categoria WHERE nome = 'Vestidos'), 'M', 'Muito bom estado', 220, 89, 'Linho leve florido, caimento solto, perfeito para dias quentes.', '/produtos/01-vestido-.png'),
  ('Camisa vintage', (SELECT id FROM categoria WHERE nome = 'Camisas'), 'G', 'Seminova', 140, 59, 'Camisa vintage, garimpada dos anos 2000.', '/produtos/02-camisa.jpg'),
  ('Calça skin preta básica', (SELECT id FROM categoria WHERE nome = 'Calças'), '40', 'Muito bom estado', 180, 75, 'Corte reto, tecido estruturado com caimento atemporal.', '/produtos/03-calca-alfaiataria-bege.jpg'),
  ('Jaqueta jeans barro', (SELECT id FROM categoria WHERE nome = 'Jaquetas'), 'P', 'Bom estado', 260, 110, 'Jeans lavado em tingimento terroso, forro quentinho para o inverno.', '/produtos/04-jaqueta-jeans-barro.jpg'),
  ('Bolsa de palha trançada', (SELECT id FROM categoria WHERE nome = 'Acessórios'), 'Único', 'Muito bom estado', 120, 49, 'Palha trançada à mão, alças de couro envelhecido.', '/produtos/05-bolsa-palha-trancada.jpg'),
  ('Vestido longo verde-oliva', (SELECT id FROM categoria WHERE nome = 'Vestidos'), 'P', 'Seminova', 230, 95, 'Viscose fluida verde-oliva, fenda lateral e botões de madeira.', '/produtos/06-vestido.jpg'),
  ('Camisa social cal', (SELECT id FROM categoria WHERE nome = 'Camisas'), 'M', 'Muito bom estado', 130, 55, 'Tricoline cor de cal, gola clássica.', '/produtos/07-camisa-social-cal.jpg'),
  ('Calça pantalona terracota', (SELECT id FROM categoria WHERE nome = 'Calças'), '38', 'Bom estado', 160, 68, 'Pantalona fluida em terracota, cintura alta com amarração.', '/produtos/08-calca-pantalona-terracota.jpg'),
  ('Jaqueta de couro marrom-barro', (SELECT id FROM categoria WHERE nome = 'Jaquetas'), 'M', 'Bom estado', 420, 189, 'Couro legítimo envelhecido, acabamento aveludado.', '/produtos/09-jaqueta-couro-barro.jpg'),
  ('Bolsa vermelha', (SELECT id FROM categoria WHERE nome = 'Acessórios'), 'Único', 'Novo', 70, 29, 'Bolsa vermelha estruturada, alça de mão.', '/produtos/10-bolsa-vermelha.jpg'),
  ('Vestido curto bege texturizado', (SELECT id FROM categoria WHERE nome = 'Vestidos'), 'G', 'Muito bom estado', 170, 72, 'Tricô texturizado bege, manga bufante.', '/produtos/11-vestido.jpg'),
  ('Camisa cropped verde-oliva', (SELECT id FROM categoria WHERE nome = 'Camisas'), 'P', 'Seminova', 110, 45, 'Linho cropped verde-oliva, amarração frontal.', '/produtos/12-camisa.jpg');

INSERT INTO cliente (nome, email, telefone) VALUES
  ('Ana Beatriz Souza', 'ana.souza@example.com', '(67) 99111-2233'),
  ('Carlos Henrique Lima', 'carlos.lima@example.com', '(67) 99222-3344'),
  ('Fernanda Gomes', 'fernanda.gomes@example.com', NULL);

INSERT INTO pedido (cliente_id, status) VALUES
  ((SELECT id FROM cliente WHERE email = 'ana.souza@example.com'), 'pago'),
  ((SELECT id FROM cliente WHERE email = 'carlos.lima@example.com'), 'aberto'),
  ((SELECT id FROM cliente WHERE email = 'ana.souza@example.com'), 'enviado');

INSERT INTO item_pedido (pedido_id, produto_id, quantidade, preco_unitario) VALUES
  (1, (SELECT id FROM produto WHERE nome = 'Vestido midi linho florido'), 1, 89),
  (1, (SELECT id FROM produto WHERE nome = 'Bolsa de palha trançada'), 1, 49),
  (2, (SELECT id FROM produto WHERE nome = 'Jaqueta jeans barro'), 1, 110),
  (3, (SELECT id FROM produto WHERE nome = 'Camisa vintage'), 2, 59);
