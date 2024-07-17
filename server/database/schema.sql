CREATE TABLE roles (
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(20) NOT NULL
);

INSERT INTO roles(id, name) VALUES (1, 'admin');
INSERT INTO roles(id, name) VALUES (2, 'user');

CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    hashedPassword VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    adresse VARCHAR(255),
    ville VARCHAR(255),
    code_postal VARCHAR(20),
    roles_id INT DEFAULT 2,
    FOREIGN KEY (roles_id) REFERENCES roles(id)
);


INSERT INTO utilisateurs (username, lastname, hashedPassword, email, adresse, ville, code_postal, roles_id)
VALUES ('Admin', 'Admin', '$argon2id$v=19$m=19456,t=2,p=1$QJiHcpYuLVwwibnUM3akCw$y6g6U4EtxYZ9CrkHXAo36EK8FmsbsBOSUlo2mEIwUDg', 'admin@gmail.com', '1 Rue Robert Desnos', 'Chalon sur Saône', '71100', 1);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL
);

INSERT INTO categories(id, nom) VALUES 
    (1, "Textile"),
    (2, "Alimentaire"),
    (3, "Informatique");

CREATE TABLE souscategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES categories(id)
);

INSERT INTO souscategories(id, nom, categorie_id) VALUES 
    (1, "Chaussures", 1),
    (2, "Produits Frais", 2),
    (3, "Accessoires informatique", 3);


CREATE TABLE produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    prix DECIMAL(10, 2) NOT NULL,
    quantite INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    categorie_id INT NOT NULL,
    sous_categorie_id INT NOT NULL,
    FOREIGN KEY (categorie_id) REFERENCES categories(id),
    FOREIGN KEY (sous_categorie_id) REFERENCES souscategories(id)
);

INSERT INTO produits(id, nom, description, prix, quantite, image_url, categorie_id, sous_categorie_id) VALUES
    (1, 'AirMax90', 'Nike Best Seller', 120.00, 15, 'https://i.imgur.com/S6FiaZQ.png', 1, 1),
    (2, 'Converse', 'The Converse End Of Season', 56.25, 10, 'https://i.imgur.com/6fhRCUu.png', 1, 1),
    (3, 'Steack Charal x10', 'Steack Format Familial, Provenance France', 11.25, 30, 'https://i.imgur.com/KwH0hFr.png', 2, 2),
    (4, 'DANONE Velouté x16', 'Pack Familial Yaourt Velouté Fruix Fraise, Framboise, Abricot', 5.45, 20, 'https://i.imgur.com/UMsCoj8.png', 2, 2),
    (5, 'Vulcan Roccat', 'Le clavier gaming mécanique Vulcan de ROCCAT combine innovation technologique, solidité et éclairage.', 122.99, 10, 'https://i.imgur.com/LFAcd4S.png', 3, 3),
    (6, 'Logitech G502 LIGHTSPEED', 'Poids et Couleurs entièrement Personnalisables sans Fil', 79.95, 15, 'https://i.imgur.com/kYcbDDz.png', 3, 3);


CREATE TABLE imagesaccueil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    est_promotion BOOLEAN DEFAULT FALSE
);

INSERT INTO imagesaccueil(id, image_url, est_promotion) VALUES
    (1, 'https://i.imgur.com/YJWxkGD.png', 0),
    (2, 'https://i.imgur.com/1v3wE7u.gif', 0),
    (3, 'https://i.imgur.com/TsyfWPI.gif', 0);


CREATE TABLE commandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT,
    date_commande DATETIME DEFAULT CURRENT_TIMESTAMP,
    prix_total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id)
);

CREATE TABLE articlescommande (
    id INT AUTO_INCREMENT PRIMARY KEY,
    commande_id INT,
    produit_id INT,
    quantite INT NOT NULL,
    prix DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (commande_id) REFERENCES commandes(id),
    FOREIGN KEY (produit_id) REFERENCES produits(id)
);
