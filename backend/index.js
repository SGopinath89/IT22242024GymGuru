import express from "express";
import 'dotenv/config';
import connectDB from "./src/infastructure/db.js";
import usersRouter from "./src/api/user.js";
import excersiserouter from "./src/api/excerise.js";

const app = express();
app.use(express.json());
connectDB();

app.use("/api/users", usersRouter);
app.use("/api/exercise", excersiserouter);

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
