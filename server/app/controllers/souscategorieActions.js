// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all souscategories from the database
    const souscategories = await tables.souscategorie.readAll();

    // Respond with the souscategories in JSON format
    res.json(souscategories);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific souscategorie from the database based on the provided ID
    const souscategorie = await tables.souscategorie.read(req.params.id);

    // If the souscategorie is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the souscategorie in JSON format
    if (souscategorie == null) {
      res.sendStatus(404);
    } else {
      res.json(souscategorie);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the souscategorie data from the request body
  const souscategorie = req.body;

  try {
    // Insert the souscategorie into the database
    const insertId = await tables.souscategorie.create(souscategorie);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted souscategorie
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
