--cole no seu MySQL

CREATE DATABASE petloversdb;
USE petloversdb;

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    nome_social VARCHAR(100),
    telefone VARCHAR(15),
    cpf VARCHAR(14) NOT NULL UNIQUE,
    endereco VARCHAR(100),
    nome_pet VARCHAR(50),
    tipo_pet VARCHAR(50),
    raca VARCHAR(50)
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

CREATE TABLE servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

CREATE TABLE consumos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    produto_id INT,
    servico_id INT,
    quantidade INT DEFAULT 1,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id),
    FOREIGN KEY (servico_id) REFERENCES servicos(id)
);

INSERT INTO clientes (nome, email, nome_social, telefone, cpf, endereco, nome_pet, tipo_pet, raca) VALUES
('Alice Souza', 'alice@gmail.com', 'Alicinha', '12987654321', '01987654321', 'Rua das Flores, 123', 'Bobby', 'Cachorro', 'Golden Retriever'),
('Carlos Silva', 'carlos@gmail.com', NULL, '12987654322', '01987654312', 'Avenida Central, 456', 'Mingau', 'Gato', 'Persa'),
('Mariana Costa', 'mariana@gmail.com', NULL, '12987654323', '01987654213', 'Praça Alegre, 789', 'Rex', 'Cachorro', 'Pastor Alemão'),
('Joana Lima', 'joana@gmail.com', 'Joaninha', '12987654324', '01987654143', 'Rua Verde, 321', 'Luna', 'Cachorro', 'Shih Tzu'),
('Pedro Oliveira', 'pedro@gmail.com', NULL, '12987654325', '10987654321', 'Travessa Azul, 654', 'Thor', 'Cachorro', 'Labrador');

INSERT INTO produtos (nome, preco) VALUES
('Ração Premium', 150.00),
('Brinquedo Mordedor', 25.50),
('Cama Confortável', 200.00),
('Coleira Ajustável', 50.00),
('Shampoo Pet', 30.00);

INSERT INTO servicos (nome, preco) VALUES
('Banho', 40.00),
('Tosa', 60.00),
('Consulta', 120.00),
('Vacinação', 80.00),
('Adestramento', 200.00);

INSERT INTO consumos (cliente_id, produto_id, quantidade) VALUES
(1, 1, 3), 
(2, 2, 5), 
(3, 3, 1),
(4, 4, 2), 
(5, 5, 4); 

INSERT INTO consumos (cliente_id, servico_id, quantidade) VALUES
(1, 1, 1), 
(2, 2, 1), 
(3, 3, 2), 
(4, 4, 3), 
(5, 5, 1); 
