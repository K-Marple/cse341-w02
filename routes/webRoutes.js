// Needed Resources
const express = require("express");
const router = express.Router();
// const controller = require("../controllers");
const { home, professional } = require("../controllers/index");

// Route to
router.get("/home", home);
router.get("/professional", professional);

// Export
module.exports = router;
