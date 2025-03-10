import express from "express";
import { createOrUpdateExercise, getUserExercises, getWeeklySummary } from "../application/exersise.js";

const exerciserouter = express.Router();

// POST - Create or update an exercise record for the day
exerciserouter.post("/", createOrUpdateExercise);

// GET - Retrieve all exercises for a user
exerciserouter.get("/:userId", getUserExercises);

// GET - Retrieve weekly summary for a user
exerciserouter.get("/:userId/weekly", getWeeklySummary);

export default exerciserouter;
