const AbstractRepository = require("./AbstractRepository");

class CommandeRepository extends AbstractRepository {
  constructor() {
    super({ table: "commandes" });
  }

  async create(commande) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (utilisateur_id, prix_total, date_commande) VALUES (?, ?, ?)`,
      [
        commande.utilisateur_id,
        commande.prix_total,
        commande.date_commande || new Date(),
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

  async update(commande) {
    const { id, nom } = commande;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET nom = ? WHERE id = ?`,
      [nom, id]
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

module.exports = CommandeRepository;
