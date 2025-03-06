//Password
//N7hXVeE3gA1mnLay

//String
//mongodb+srv://sharadakanchana417:N7hXVeE3gA1mnLay@gymguru.y3wxq.mongodb.net/?retryWrites=true&w=majority&appName=GymGuru
import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const MONGODB_URL = process.env.MONGODB_URL;
        if(!MONGODB_URL){
            throw new Error("MONGODB_URL is not set");
        }

        await mongoose.connect(MONGODB_URL);
        console.log("Connected to the database........")
    } catch (error){
        console.log("Error connecting to the database....")
        console.log(error);
    }
};

export default connectDB;