import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.get("/doctor", async (req, res) => {
  try {
    const { name, discipline, experience, degree } = req.query;

    // Construct the search filter dynamically
    const filter = { role: "Doctor" };

    if (name && name.trim() !== "") {
      filter.name = { $regex: name, $options: "i" }; // Case-insensitive name search
    }
    if (discipline && discipline.trim() !== "") {
      filter.discipline = { $regex: discipline, $options: "i" }; // Case-insensitive discipline search
    }
    if (experience && experience.trim() !== "") {
      filter.experience = { $gte: parseInt(experience) }; // Experience should be greater or equal
    }
    if (degree && degree.trim() !== "") {
      filter.degree = { $regex: degree, $options: "i" }; // Case-insensitive degree search
    }

    const doctors = await User.find(filter).select(
      "name discipline experience degree _id"
    );
    res.json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;