const express = require('express');
const router = express.Router();
const allController= require("../controllers/allController")

router.post("/createNewAuthor", allController.createNewAuthor);

router.post("/createNewBook", allController.createNewBook);

router.get("/allAuthors", allController.allAuthors);

router.get("/allBooks", allController.allBooks);

router.get("/listBooks", allController.listBooks);

router.get("/changeBookPrice", allController.changeBookPrice);

router.get("/authorsName", allController.authorsName);

module.exports = router;