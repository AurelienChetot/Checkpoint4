const AbstractRepository = require("./AbstractRepository");

class SousCategorieRepository extends AbstractRepository {
  constructor() {
    super({ table: "souscategories" });
  }

  async create(souscategorie) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (nom, categorie_id) VALUES (?, ?)`,
      [souscategorie.nom, souscategorie.categorie_id]
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

  async update(souscategorie) {
    const { id, nom } = souscategorie;

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

module.exports = SousCategorieRepository;
