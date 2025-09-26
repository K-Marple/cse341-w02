// Needed Resources
const express = require("express");
const router = express.Router();
const controller = require("../controllers");

// Route to
router.get("/", controller.home);
router.get("/professional", controller.professional);

// Export
module.exports = router;
