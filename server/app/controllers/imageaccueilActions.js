// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all imagesaccueils from the database
    const imagesaccueils = await tables.imagesaccueil.readAll();

    // Respond with the imagesaccueils in JSON format
    res.json(imagesaccueils);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific imagesaccueil from the database based on the provided ID
    const imagesaccueil = await tables.imagesaccueil.read(req.params.id);

    // If the imagesaccueil is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the imagesaccueil in JSON format
    if (imagesaccueil == null) {
      res.sendStatus(404);
    } else {
      res.json(imagesaccueil);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    // Fetch a specific imagesaccueil from the database based on the provided ID
    const imagesaccueil = await tables.imagesaccueil.read(req.params.id);

    // If the imagesaccueil is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the imagesaccueil in JSON format
    if (imagesaccueil == null) {
      res.sendStatus(404);
    } else {
      res.json(imagesaccueil);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the imagesaccueil data from the request body
  const imagesaccueil = req.body;

  try {
    // Insert the imagesaccueil into the database
    const insertId = await tables.imagesaccueil.create(imagesaccueil);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted imagesaccueil
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    // Fetch a specific imagesaccueil from the database based on the provided ID
    const imagesaccueil = await tables.imagesaccueil.delete(req.params.id);

    // If the imagesaccueil is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the imagesaccueil in JSON format
    if (imagesaccueil == null) {
      res.sendStatus(404);
    } else {
      res.json(imagesaccueil);
    }
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
