const { DatabaseSync } = require('node:sqlite');
const fs = require('node:fs');
const path = require('node:path');

const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
const seed = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');

const db = new DatabaseSync(':memory:');

console.log('== Criando o schema ==');
db.exec(schema);
console.log('OK: tabelas criadas (categoria, produto, cliente, pedido, item_pedido)\n');

console.log('== Inserindo dados (seed) ==');
db.exec(seed);
console.log('OK: dados inseridos\n');

function printQuery(titulo, sql) {
  console.log(`-- ${titulo} --`);
  const rows = db.prepare(sql).all();
  console.table(rows);
  console.log('');
}

printQuery('1) Catálogo completo com categoria (JOIN)', `
  SELECT p.id, p.nome, c.nome AS categoria, p.tamanho, p.condicao, p.preco_original, p.preco
  FROM produto p JOIN categoria c ON c.id = p.categoria_id
  ORDER BY c.nome, p.nome
`);

printQuery('2) Top 5 maiores descontos', `
  SELECT nome, preco_original, preco,
         ROUND(100.0 * (1 - preco * 1.0 / preco_original), 1) AS desconto_percentual
  FROM produto ORDER BY desconto_percentual DESC LIMIT 5
`);

printQuery('3) Total gasto por cliente', `
  SELECT cl.nome AS cliente, COUNT(DISTINCT pe.id) AS pedidos, SUM(ip.quantidade * ip.preco_unitario) AS total_gasto
  FROM cliente cl JOIN pedido pe ON pe.cliente_id = cl.id JOIN item_pedido ip ON ip.pedido_id = pe.id
  GROUP BY cl.id ORDER BY total_gasto DESC
`);

printQuery('4) Pedidos em aberto', `
  SELECT pe.id AS pedido_id, cl.nome AS cliente, pe.status, pe.data_pedido
  FROM pedido pe JOIN cliente cl ON cl.id = pe.cliente_id
  WHERE pe.status = 'aberto'
`);

console.log('-- 5) UPDATE: reajuste de +5% na categoria Jaquetas --');
let r = db.prepare(`
  UPDATE produto SET preco = ROUND(preco * 1.05, 2)
  WHERE categoria_id = (SELECT id FROM categoria WHERE nome = 'Jaquetas')
`).run();
console.log(`linhas afetadas: ${r.changes}\n`);

printQuery('   produtos da categoria Jaquetas após o reajuste', `
  SELECT nome, preco FROM produto
  WHERE categoria_id = (SELECT id FROM categoria WHERE nome = 'Jaquetas')
`);

console.log('-- 6) UPDATE: marcar pedido 2 como pago --');
r = db.prepare(`UPDATE pedido SET status = 'pago' WHERE id = 2`).run();
console.log(`linhas afetadas: ${r.changes}\n`);

console.log('-- 7) DELETE: remover item (pedido 3, Camisa vintage) --');
r = db.prepare(`
  DELETE FROM item_pedido
  WHERE pedido_id = 3 AND produto_id = (SELECT id FROM produto WHERE nome = 'Camisa vintage')
`).run();
console.log(`linhas afetadas: ${r.changes}\n`);

console.log('-- 8) DELETE: remover pedido 3 (cascata em item_pedido) --');
r = db.prepare(`DELETE FROM pedido WHERE id = 3`).run();
console.log(`linhas afetadas: ${r.changes}\n`);

printQuery('   pedidos restantes após as remoções', `SELECT id, cliente_id, status FROM pedido`);

db.close();
console.log('Execução concluída com sucesso.');
