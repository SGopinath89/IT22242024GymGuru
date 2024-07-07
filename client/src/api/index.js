import axios from "axios";


// Function to sign up a new user
export const UserSignUp = async (data) => API.post("/user/signup", data);

// Function to sign in an existing user
export const UserSignIn = async (data) => API.post("/user/signin", data);

// Function to get dashboard details for a user
export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` }, // Include authorization header with bearer token
  });

// Function to get workouts for a user on a specific date
export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` }, // Include authorization header with bearer token
  });

// Function to add a new workout for a user
export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` }, // Include authorization header with bearer token
  });
