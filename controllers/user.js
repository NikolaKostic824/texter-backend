import User from "../model/user.js";
import mongoose from "mongoose";

//Create new user
export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json({
      message: "New user is created!",
    });
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

//Edit user
export const editUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);
  const updatedUser = req.body;
  await User.findByIdAndUpdate(id, updatedUser, {
    new: true,
  });
  res.json(updatedUser);
};

//Get all users(writers)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
//Get all users
export const getAllUsersAdmin = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
//Delete user by ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);
  await User.findByIdAndRemove(id);
  res.json({
    message: "User was deleted",
  });
};

// Get user by Id
export const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);
  try {
    const userById = await User.findById(id);
    res.status(200).json(userById);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

//Login user
export const loginUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const user = await User.findOne({
      username: username,
      password: password,
    });
    if (!user) {
      res.status(204).json({
        message: "User not found",
      });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
