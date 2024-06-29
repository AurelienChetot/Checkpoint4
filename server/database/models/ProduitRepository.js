const AbstractRepository = require("./AbstractRepository");

class ProduitRepository extends AbstractRepository {
  constructor() {
    // Appeler le constructeur de la classe parent (AbstractRepository)
    // et passer le nom de la table "produits" comme configuration
    super({ table: "produits" });
  }

  // Le C de CRUD - Opération de création
  async create(produit) {
    // Exécuter la requête SQL INSERT pour ajouter un nouveau produit à la table "produits"
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (nom, description, prix, quantite, image_url, categorie_id, sous_categorie_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        produit.nom,
        produit.description,
        produit.prix,
        produit.quantite,
        produit.imageUrl,
        produit.categorieId,
        produit.sousCategorieId,
      ]
    );

    // Retourner l'ID du produit nouvellement inséré
    return result.insertId;
  }

  // Le R de CRUD - Opérations de lecture
  async read(id) {
    // Exécuter la requête SQL SELECT pour récupérer un produit spécifique par son ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Retourner la première ligne du résultat, qui représente le produit
    return rows[0];
  }

  async readAll() {
    const query = `
      SELECT
        p.*,
        c.nom AS categorie_nom,
        sc.nom AS sous_categorie_nom
      FROM ${this.table} AS p
      JOIN categories AS c ON p.categorie_id = c.id
      LEFT JOIN souscategories AS sc ON p.sous_categorie_id = sc.id
    `;
    const [rows] = await this.database.query(query);
    return rows;
  }

  // Le U de CRUD - Opération de mise à jour
  async update(produit) {
    // Le U de CRUD - Opération de mise à jour
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET nom = ?, description = ?, prix = ?, quantite = ?, image_url = ?, categorie_id = ?, sous_categorie_id = ? WHERE id = ?`,
      [
        produit.nom,
        produit.description,
        produit.prix,
        produit.quantite,
        produit.image_url,
        produit.categorie_id,
        produit.sous_categorie_id,
        produit.id,
      ]
    );

    return result.affectedRows > 0;
  }

  // Le D de CRUD - Opération de suppression
  async delete(id) {
    // Exécuter la requête SQL DELETE pour supprimer un produit de la table "produits" par son ID
    const [destroy] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Retourner true/false en fonction du succès de la suppression
    return destroy.affectedRows > 0;
  }
}

module.exports = ProduitRepository;
