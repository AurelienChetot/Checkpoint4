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
    (3, 'Asics', 'Chaussures pour marche urbaine', 87.00, 15, 'https://i.imgur.com/iX6wKfq.png', 1, 1),
    (4, 'Ochenta Escaprins', 'Talons hauts à bord rond', 48.99, 10, 'https://i.imgur.com/vhXggiF.png', 1, 1),
    (5, 'ALDO Escaprins', 'Sandales Cagey Wedge avec sangle de cheville', 72.99, 15, 'https://i.imgur.com/PhDILEt.png', 1, 1),
    (6, 'Sandales', 'Sandales pour femme Orthopédique Antidérapantes, idéale pour la marche', 10.99, 20, 'https://i.imgur.com/tCyasZ1.png', 1, 1),
    (7, 'Steack Charal x10', 'Steack Format Familial, Provenance France', 11.25, 30, 'https://i.imgur.com/KwH0hFr.png', 2, 2),
    (8, 'DANONE Velouté x16', 'Pack Familial Yaourt Velouté Fruix Fraise, Framboise, Abricot', 5.45, 20, 'https://i.imgur.com/yiIlkF8.png', 2, 2),
    (9, 'Croissants Pasquier x8', 'Découvrez le plaisir authentique des Croissants Pasquier en pack de 8, parfait pour toute la famille. Ces croissants, préparés avec soin et selon la tradition française.', 2.55, 25, 'https://i.imgur.com/VegY22j.png', 2, 2),
    (10, 'Ovomaltine', 'Pâte à tartiner, idéale pour accompagner vos petits-déjeuners sur du pain ou des crêpes.', 4.20, 30, 'https://i.imgur.com/tvGyEra.png', 2, 2),
    (11, 'Vulcan Roccat', 'Le clavier gaming mécanique Vulcan de ROCCAT combine innovation technologique, solidité et éclairage.', 122.99, 10, 'https://i.imgur.com/LFAcd4S.png', 3, 3),
    (12, 'Logitech G502 LIGHTSPEED', 'Poids et Couleurs entièrement Personnalisables sans Fil', 79.95, 15, 'https://i.imgur.com/8hUkcab.png', 3, 3),
    (13, 'Samsung Ecran PC Odyssey G55T 34 pouces', 'Écran PC de 34 pouces Incurvé 1000R, doté de la Dalle VA de 1ms avec une résolution UWQHD 3440x1440 pour vos jeux préférés. ', 439.00, 5, 'https://i.imgur.com/J0VHq1W.png', 3, 3),
    (14, 'HUANUO Support Ecran PC 2', 'Support d''écran double 13-34 pouces. Grâce à ce support, vous gagnerez en place sur votre bureau ainsi qu''en egronomie ', 69.99, 13, 'https://i.imgur.com/N3EwmX4.png', 3, 3),
    (15, 'Devoko Bureau Assis Debout Électrique 160x80cm', 'La hauteur du bureau est réglable entre 72 cm et 118 cm. Il suffit d''appuyer sur un bouton pour régler le bureau à la hauteur souhaitée. Il emporte également un port Type C pour recharger vos appareils à tout moment.', 259.99, 8, 'https://i.imgur.com/Y1labaT.png', 3, 3);

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
