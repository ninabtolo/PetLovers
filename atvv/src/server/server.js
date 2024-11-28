//aqui está meu backend, com as rotas para enviar as operações CRUD para o MySQL
//tem que colocar seu user e sua senha

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'petloversdb',
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar no banco:', err);
  } else {
    console.log('Conectado ao MySQL');
  }
});

app.get('/clientes', (req, res) => {
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

app.post('/clientes', (req, res) => {
  const { nome, email, nomeSocial: nome_social, telefone, cpf, endereco, tipoPet: tipo_pet, nomePet: nome_pet, raca } = req.body;

  const sql = `
    INSERT INTO clientes (nome, email, nome_social, telefone, cpf, endereco, nome_pet, tipo_pet, raca) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  db.query(sql, [nome, email, nome_social, telefone, cpf, endereco, nome_pet, tipo_pet, raca], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: 'Cliente cadastrado com sucesso!' });
    }
  });
});

app.delete('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM clientes WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir cliente:', err);
      res.status(500).send({ error: 'Erro ao excluir cliente' });
    } else if (result.affectedRows === 0) {
      res.status(404).send({ error: 'Cliente não encontrado' });
    } else {
      res.send({ message: 'Cliente excluído com sucesso!' });
    }
  });
});

app.put('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const { nome, nome_social, email, telefone, cpf, endereco, tipo_pet, nome_pet, raca } = req.body;

  const sql = `
    UPDATE clientes 
    SET nome = ?, nome_social = ?, email = ?, telefone = ?, cpf = ?, endereco = ?, tipo_pet = ?, nome_pet = ?, raca = ?
    WHERE id = ?
  `;

  db.query(sql, [nome, nome_social, email, telefone, cpf, endereco, tipo_pet, nome_pet, raca, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar cliente:', err);
      res.status(500).send({ error: 'Erro ao atualizar cliente' });
    } else if (result.affectedRows === 0) {
      res.status(404).send({ error: 'Cliente não encontrado' });
    } else {
      res.send({ message: 'Cliente atualizado com sucesso!' });
    }
  });
});

app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;
    const sql = 'INSERT INTO produtos (nome, preco) VALUES (?, ?)';
    db.query(sql, [nome, preco], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({ message: 'Produto cadastrado com sucesso!' });
        }
    });
});

app.get('/produtos', (req, res) => {
    db.query('SELECT * FROM produtos', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(results);
        }
    });
});

app.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;
    const sql = 'UPDATE produtos SET nome = ?, preco = ? WHERE id = ?';
    db.query(sql, [nome, preco, id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.affectedRows === 0) {
            res.status(404).send({ message: 'Produto não encontrado' });
        } else {
            res.send({ message: 'Produto atualizado com sucesso!' });
        }
    });
});

app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM produtos WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.affectedRows === 0) {
            res.status(404).send({ message: 'Produto não encontrado' });
        } else {
            res.send({ message: 'Produto excluído com sucesso!' });
        }
    });
});

app.post('/servicos', (req, res) => {
    const { nome, preco } = req.body;
    const sql = 'INSERT INTO servicos (nome, preco) VALUES (?, ?)';
    db.query(sql, [nome, preco], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({ message: 'Serviço cadastrado com sucesso!' });
        }
    });
});

app.get('/servicos', (req, res) => {
    db.query('SELECT * FROM servicos', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(results);
        }
    });
});

app.put('/servicos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;
    const sql = 'UPDATE servicos SET nome = ?, preco = ? WHERE id = ?';
    db.query(sql, [nome, preco, id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.affectedRows === 0) {
            res.status(404).send({ message: 'Serviço não encontrado' });
        } else {
            res.send({ message: 'Serviço atualizado com sucesso!' });
        }
    });
});

app.delete('/servicos/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM servicos WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.affectedRows === 0) {
            res.status(404).send({ message: 'Serviço não encontrado' });
        } else {
            res.send({ message: 'Serviço excluído com sucesso!' });
        }
    });
});

app.get('/clientes/top10', (req, res) => {
  const sql = `
    SELECT c.nome, SUM(co.quantidade) AS total_quantidade
    FROM consumos co
    JOIN clientes c ON co.cliente_id = c.id
    GROUP BY c.id
    ORDER BY total_quantidade DESC
    LIMIT 10;
  `;
  db.query(sql, (err, results) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.send(results);
      }
  });
});

app.get('/consumos/top', (req, res) => {
  const sql = `
    SELECT
      IFNULL(p.nome, s.nome) AS item,
      SUM(co.quantidade) AS total_consumido
    FROM consumos co
    LEFT JOIN produtos p ON co.produto_id = p.id
    LEFT JOIN servicos s ON co.servico_id = s.id
    GROUP BY item
    ORDER BY total_consumido DESC;
  `;
  db.query(sql, (err, results) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.send(results);
      }
  });
});

app.get('/consumos/por-pet', (req, res) => {
  const sql = `
    SELECT
      c.tipo_pet,
      c.raca,
      IFNULL(p.nome, s.nome) AS item,
      SUM(co.quantidade) AS total_consumido
    FROM consumos co
    LEFT JOIN clientes c ON co.cliente_id = c.id
    LEFT JOIN produtos p ON co.produto_id = p.id
    LEFT JOIN servicos s ON co.servico_id = s.id
    GROUP BY c.tipo_pet, c.raca, item
    ORDER BY total_consumido DESC
    LIMIT 5;
  `;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

app.get('/clientes/top5-valor', (req, res) => {
  const sql = `
    SELECT
      c.nome,
      SUM(IFNULL(p.preco, 0) * co.quantidade + IFNULL(s.preco, 0) * co.quantidade) AS total_gasto
    FROM consumos co
    LEFT JOIN clientes c ON co.cliente_id = c.id
    LEFT JOIN produtos p ON co.produto_id = p.id
    LEFT JOIN servicos s ON co.servico_id = s.id
    GROUP BY c.id
    ORDER BY total_gasto DESC
    LIMIT 5;
  `;
  db.query(sql, (err, results) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.send(results);
      }
  });
});

app.post('/consumos', (req, res) => {
  const { cliente_id, produto_id, servico_id, quantidade } = req.body;

  const sql = `
    INSERT INTO consumos (cliente_id, produto_id, servico_id, quantidade)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [cliente_id, produto_id || null, servico_id || null, quantidade], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: 'Consumo registrado com sucesso!' });
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
}); 