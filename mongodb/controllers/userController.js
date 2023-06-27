import userModel from "../models/userModel.js";

// add user
export const createUser = async (req, res) => {
  try {
    const newUser = new userModel({
      ...req.body,
    });

    await newUser.save();

    res.status(201).send(`New user username: ${req.body.username} is created`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
// get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});

    res.status(201).send(users);
  } catch (error) {
    console.log(error);

    res.status(400).send(error);
  }
};
// get one user
export const getUser = async (req, res) => {
  try {
    const user = await userModel.find({username: req.params.username});

    res.status(201).send(user);
  } catch (error) {
    console.log(error);

    res.status(400).send(error);
  }
};
// delete student
export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.deleteOne({username: req.params.username});

    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// update
export const updateUser = async (req, res) => {
  try {
    const user = await userModel.findOneAndUpdate(
      {
        username: req.params.username,
      },
      {
        $set: req.body,
      },
      {new: true}
    );

    res.status(201).send(user);
  } catch (error) {
    console.log(error);

    res.status(400).send(error);
  }
};
