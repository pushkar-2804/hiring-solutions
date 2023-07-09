// routes/candidateRoutes.js
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  searchCandidate,
  getAllCandidates,
} = require("../controllers/candidateController");

const router = express.Router();

router.post("/search", authMiddleware, searchCandidate);
router.get("/all", authMiddleware, getAllCandidates);

module.exports = router;
