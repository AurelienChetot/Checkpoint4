const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import commande-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/commandeActions");

// Route to get a list of commandes
router.get("/", browse);

// Route to get a specific commande by ID
router.get("/:id", read);

// Route to modify a specific user by ID
router.put("/:id", edit);

// Route to add a new user
router.post("/", add);

// Route to remove a new user by ID
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
