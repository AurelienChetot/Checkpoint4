const AbstractRepository = require("./AbstractRepository");

class ArticlesCommandeRepository extends AbstractRepository {
  constructor() {
    super({ table: "articlescommande" });
  }

  async create(articlescommande) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (commande_id, produit_id, quantite, prix) VALUES (?, ?, ?, ?)`,
      [
        articlescommande.commande_id,
        articlescommande.produit_id,
        articlescommande.quantite,
        articlescommande.prix,
      ]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(articlescommande) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET commande_id = ?, produit_id = ?, quantite = ?, prix = ? WHERE id = ?`,
      [
        articlescommande.commande_id,
        articlescommande.produit_id,
        articlescommande.quantite,
        articlescommande.prix,
        articlescommande.id,
      ]
    );

    return result.affectedRows > 0;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows > 0;
  }
}

module.exports = ArticlesCommandeRepository;
