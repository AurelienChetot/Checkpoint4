const AbstractRepository = require("./AbstractRepository");

class ImageAccueilRepository extends AbstractRepository {
  constructor() {
    super({ table: "imagesaccueil" });
  }

  async create(imagesaccueil) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (image_url) VALUES (?)`,
      [imagesaccueil.image_url]
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

  async update(imagesaccueil) {
    const { id, nom } = imagesaccueil;

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

module.exports = ImageAccueilRepository;
