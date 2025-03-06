import express from "express"
import 'dotenv/config';
import connectDB from "./src/infastructure/db.js";
const app = express();
app.use(express.json());
connectDB();
app.listen(8081,() => {
    console.log("Server is running on port 8081")
});