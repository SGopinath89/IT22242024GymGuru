import Exercise from "../infastructure/schemas/excersise.js";

// Create or update an exercise record per day
export const createOrUpdateExercise = async (req, res) => {
    try {
        const { userId, exerciseId, count, time, name } = req.body;
        const today = new Date().toISOString().split("T")[0];

        // Check if the exercise entry exists for today
        let exercise = await Exercise.findOne({ userId, exerciseId, date: today });

        if (exercise) {
            // If exists, update count and time
            exercise.count += count;
            exercise.time += time;
            await exercise.save();
            return res.status(200).json({ message: "Exercise updated successfully", exercise });
        } else {
            // If not, create a new entry
            const newExercise = new Exercise({ userId, exerciseId, name, count, time, date: today });
            await newExercise.save();
            return res.status(201).json({ message: `Exercise ${name} recorded successfully`, newExercise });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

// Get all exercises for a user
export const getUserExercises = async (req, res) => {
    try {
        const { userId } = req.params;
        const exercises = await Exercise.find({ userId }).sort({ date: -1 });

        if (!exercises.length) {
            return res.status(404).json({ message: "No exercise records found" });
        }

        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

// Get weekly summary for a user
export const getWeeklySummary = async (req, res) => {
    try {
        const { userId } = req.params;
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

        const exercises = await Exercise.aggregate([
            {
                $match: {
                    userId,
                    date: { $gte: sevenDaysAgo.toISOString().split("T")[0] },
                },
            },
            {
                $group: {
                    _id: "$date",
                    totalCount: { $sum: "$count" },
                    totalTime: { $sum: "$time" },
                },
            },
            { $sort: { _id: 1 } },
        ]);

        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};
