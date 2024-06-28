// Import the repository modules responsible for handling data operations on the tables
const ProduitRepository = require("./models/ProduitRepository");
const CategorieRepository = require("./models/CategorieRepository");
const SousCategorieRepository = require("./models/SousCategorieRepository");
const UtilisateurRepository = require("./models/UtilisateurRepository");
const ArticlesCommandeRepository = require("./models/ArticlesCommandeRepository");
const CommandeRepository = require("./models/CommandeRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table
tables.produit = new ProduitRepository();
tables.categorie = new CategorieRepository();
tables.souscategorie = new SousCategorieRepository();
tables.utilisateurs = new UtilisateurRepository();
tables.articlescommande = new ArticlesCommandeRepository();
tables.commandes = new CommandeRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
