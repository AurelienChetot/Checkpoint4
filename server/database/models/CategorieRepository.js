const AbstractRepository = require("./AbstractRepository");

class CategorieRepository extends AbstractRepository {
  constructor() {
    super({ table: "categories" });
  }

  async create(categorie) {
    const { nom } = categorie;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (nom) VALUES (?)`,
      [nom]
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

  async update(categorie) {
    const { id, nom } = categorie;

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

module.exports = CategorieRepository;
