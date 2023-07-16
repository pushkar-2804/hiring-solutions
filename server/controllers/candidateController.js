// controllers/candidateController.js
const Candidate = require("../models/Candidate");

const searchCandidate = async (req, res) => {
  try {
    const { location, jobRole } = req.body;
    const searchCriteria = {};

    if (location) {
      searchCriteria.location = { $regex: new RegExp(location, "i") };
    }

    if (jobRole) {
      searchCriteria.job = { $regex: new RegExp(jobRole, "i") };
    }

    const candidates = await Candidate.find(searchCriteria).select(
      "name email job location"
    );
    res.status(200).json({ candidates });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find().select("name email job location");
    res.status(200).json({ candidates });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Candidate creation endpoint
const createNewCandidate = async (req, res) => {
  try {
    const { name, email, location, jobRole } = req.body;

    // Create a new candidate instance
    const newCandidate = new Candidate({
      name,
      email,
      location,
      jobRole,
    });

    // Save the new candidate in the database
    const createdCandidate = await newCandidate.save();

    res.status(201).json({ candidate: createdCandidate });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  searchCandidate,
  getAllCandidates,
  createNewCandidate,
};
