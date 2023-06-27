import userModel from "../models/userModel.js";

// add user. req and res are comming from express
export const createUser = async (req, res) => {
  try {
    const newUser = new userModel({
      ...req.body,
    });

    //below is the same as above
    // const newUser = new userModel({
    //   username: req.body.userName,
    //   password: req.body.password,
    // });
    await newUser.save();

    const {password, ...remainingUserData} = newUser._doc;

    // if we don't send status, the route will not be resolved
    res.status(201).json(remainingUserData);
    // res.status(201).send(`New user username: ${req.body.username} is created`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
// get all users
export const getAllUsers = async (req, res) => {
  try {
    // password:0 means we don't want to send back the passwords from the database
    const users = await userModel.find({}, {password: 0});

    res.status(201).send(users);
  } catch (error) {
    console.log(error);

    res.status(400).send(error);
  }
};
// get one user
export const getUser = async (req, res) => {
  try {
    // {password: 0} is built in mongoose method which removes password from being sent back
    const user = await userModel.find(
      {username: req.params.username},
      {password: 0}
    );

    // below is the same above
    // const user = await userModel.findOne({username: req.body.username});

    res.status(201).send(user);
  } catch (error) {
    console.log(error);

    res.status(400).send(error);
  }
};
// delete student
export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.deleteOne(
      {username: req.params.username},
      {password: 0}
    );

    // const {password, ...remainingUserData} = user._doc;
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
