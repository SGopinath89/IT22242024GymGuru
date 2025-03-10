import express from "express";
import { createUser, getAllUsers } from "../application/user.js"; 

const usersRouter = express.Router();

usersRouter.post("/", createUser); // Create user
usersRouter.get("/", getAllUsers); // Get all users

export default usersRouter;
