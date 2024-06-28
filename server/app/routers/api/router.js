const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const utilisateursRouter = require("./utilisateurs/router");

router.use("/utilisateurs", utilisateursRouter);

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

const souscategoriesRouter = require("./souscategories/router");

router.use("/souscategories", souscategoriesRouter);

const produitsRouter = require("./produits/router");

router.use("/produits", produitsRouter);

const imageaccueilsRouter = require("./imageaccueils/router");

router.use("/imageaccueils", imageaccueilsRouter);

const commandesRouter = require("./commandes/router");

router.use("/commandes", commandesRouter);

const articlescommandesRouter = require("./articlescommandes/router");

router.use("/articlescommandes", articlescommandesRouter);

/* ************************************************************************* */

module.exports = router;
