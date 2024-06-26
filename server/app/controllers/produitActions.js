// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all produits from the database
    const produits = await tables.produit.readAll();

    // Respond with the produits in JSON format
    res.json(produits);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific produit from the database based on the provided ID
    const produit = await tables.produit.read(req.params.id);

    // If the produit is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the produit in JSON format
    if (produit == null) {
      res.sendStatus(404);
    } else {
      res.json(produit);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the produit data from the request body
  const produit = req.body;

  try {
    // Insert the produit into the database
    const insertId = await tables.produit.update(produit);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted produit
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the produit data from the request body
  const produit = req.body;

  try {
    // Insert the produit into the database
    const insertId = await tables.produit.create(produit);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted produit
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  // Extract the produit data from the request body
  try {
    // Insert the produit into the database
    const insertId = await tables.produit.delete(req.params.id);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted produit
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
