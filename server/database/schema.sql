CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role ENUM('user', 'admin') DEFAULT 'user',
    adresse VARCHAR(255),
    ville VARCHAR(255),
    code_postal VARCHAR(20)
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL
);

CREATE TABLE souscategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES categories(id)
);

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

CREATE TABLE imagesaccueil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    est_promotion BOOLEAN DEFAULT FALSE
);

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
