import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    exerciseId: {
        type: Number,
        enum: [0, 1, 2, 3, 4],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true,
        default: 0
    },
    time: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: String,
        required: true,
        default: () => new Date().toISOString().split("T")[0]
    }
});

export default mongoose.model("Exercise", exerciseSchema);
