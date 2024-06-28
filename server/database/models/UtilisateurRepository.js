const AbstractRepository = require("./AbstractRepository");

class UtilisateurRepository extends AbstractRepository {
  constructor() {
    // Appeler le constructeur de la classe parent (AbstractRepository)
    // et passer le nom de la table "users" comme configuration
    super({ table: "utilisateurs" });
  }

  // Le C de CRUD - Opération de création
  async create(utilisateur) {
    // Exécuter la requête SQL INSERT pour ajouter un nouveau user à la table "users"
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} SET username = ?, password = ?, email = ?, adresse = ?, ville = ?, code_postal = ?`,
      [
        utilisateur.username,
        utilisateur.password,
        utilisateur.email,
        utilisateur.adresse,
        utilisateur.ville,
        utilisateur.code_postal,
      ]
    );

    // Retourner l'ID du user nouvellement inséré
    return result.insertId;
  }

  // Le R de CRUD - Opérations de lecture
  async read(id) {
    // Exécuter la requête SQL SELECT pour récupérer un user spécifique par son ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Retourner la première ligne du résultat, qui représente le user
    return rows[0];
  }

  async readAll() {
    // Exécuter la requête SQL SELECT pour récupérer tous les users de la table "users"
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Retourner le tableau de users
    return rows;
  }

  // Le U de CRUD - Opération de mise à jour
  async update(user) {
    // Le U de CRUD - Opération de mise à jour
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET username = ?, password = ?, email = ?, adresse = ?, ville = ?, code_postal = ? WHERE id = ?`,
      [
        user.username,
        user.password,
        user.email,
        user.adresse,
        user.ville,
        user.code_postal,
        user.id,
      ]
    );

    return result.affectedRows > 0;
  }

  // Le D de CRUD - Opération de suppression
  async delete(id) {
    // Exécuter la requête SQL DELETE pour supprimer un user de la table "users" par son ID
    const [destroy] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Retourner true/false en fonction du succès de la suppression
    return destroy.affectedRows > 0;
  }
}

module.exports = UtilisateurRepository;
