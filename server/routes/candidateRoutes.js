// routes/candidateRoutes.js
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  searchCandidate,
  getAllCandidates,
  createNewCandidate,
} = require("../controllers/candidateController");

const router = express.Router();

router.post("/search", authMiddleware, searchCandidate);
router.post("/create-candidate", authMiddleware, createNewCandidate);
router.get("/all", authMiddleware, getAllCandidates);

module.exports = router;
