-- 1) Consulta: catálogo completo com nome da categoria (JOIN)
SELECT p.id, p.nome, c.nome AS categoria, p.tamanho, p.condicao, p.preco_original, p.preco
FROM produto p
JOIN categoria c ON c.id = p.categoria_id
ORDER BY c.nome, p.nome;

-- 2) Consulta: produtos com maior desconto percentual
SELECT nome, preco_original, preco,
       ROUND(100.0 * (1 - preco * 1.0 / preco_original), 1) AS desconto_percentual
FROM produto
ORDER BY desconto_percentual DESC
LIMIT 5;

-- 3) Consulta: total gasto por cliente (agregação com JOIN em 3 tabelas)
SELECT cl.nome AS cliente, COUNT(DISTINCT pe.id) AS pedidos, SUM(ip.quantidade * ip.preco_unitario) AS total_gasto
FROM cliente cl
JOIN pedido pe ON pe.cliente_id = cl.id
JOIN item_pedido ip ON ip.pedido_id = pe.id
GROUP BY cl.id
ORDER BY total_gasto DESC;

-- 4) Consulta: pedidos em aberto, com dados do cliente
SELECT pe.id AS pedido_id, cl.nome AS cliente, pe.status, pe.data_pedido
FROM pedido pe
JOIN cliente cl ON cl.id = pe.cliente_id
WHERE pe.status = 'aberto';

-- 5) Atualização: aplicar reajuste de preço em uma categoria (ex.: Jaquetas, +5%)
UPDATE produto
SET preco = ROUND(preco * 1.05, 2)
WHERE categoria_id = (SELECT id FROM categoria WHERE nome = 'Jaquetas');

-- 6) Atualização: marcar pedido como pago
UPDATE pedido
SET status = 'pago'
WHERE id = 2;

-- 7) Remoção: excluir um item de pedido específico
DELETE FROM item_pedido
WHERE pedido_id = 3 AND produto_id = (SELECT id FROM produto WHERE nome = 'Camisa vintage');

-- 8) Remoção: excluir um pedido (os itens são removidos em cascata, por ON DELETE CASCADE)
DELETE FROM pedido
WHERE id = 3;
