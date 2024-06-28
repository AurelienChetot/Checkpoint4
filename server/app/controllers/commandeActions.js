// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all commandes from the database
    const commandes = await tables.commandes.readAll();

    // Respond with the commandes in JSON format
    res.json(commandes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific commande from the database based on the provided ID
    const commande = await tables.commandes.read(req.params.id);

    // If the commande is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the commande in JSON format
    if (commande == null) {
      res.sendStatus(404);
    } else {
      res.json(commande);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the commande data from the request body
  const commande = req.body;

  try {
    // Insert the commande into the database
    const insertId = await tables.commandes.create(commande);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted commande
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the commande data from the request body
  const commande = req.body;

  try {
    // Insert the commande into the database
    const insertId = await tables.commandes.create(commande);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted commande
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  // Extract the commande data from the request body
  const commande = req.body;

  try {
    // Insert the commande into the database
    const insertId = await tables.commande.create(commande);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted commande
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
