import User from "../infastructure/schemas/User.js";

// Create User
export const createUser = async (req, res) => {
  const user = req.body;

  if (!user.name || !user.email || !user.password) {
    return res.status(400).send({ message: "Name , email and password are required" });
  }

  await User.create({
    name: user.name,
    email: user.email,
    password:user.password,
  });

  return res.status(201).send({ message: "User created successfully" });
};

// Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send({ message: "Error fetching users" });
  }
};
