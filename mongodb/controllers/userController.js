import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// We will handle logging session for the user
export const loginUser = async (req, res) => {
  try {
    const foundUser = await userModel.findOne({username: req.body.username});

    if (!foundUser) {
      return res.status(404).send(`Username or password is wrong`);
    }
    // we decript the data to compare the password
    const isUserPasswordCorrect = bcrypt.compareSync(
      req.body.password.toString(),
      foundUser.password
    );

    if (!isUserPasswordCorrect) {
      return res.status(404).send("Password is not correct");
    }

    const token = jwt.sign({id: foundUser._id}, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    // cokies are better to store session tokens than localStorage. Advantages of cookies: it is more secure, we can prevent cross-site attacks. Localstorage capable of storage large data, such as img

    return res
      .cookie("session_token", token, {
        // eliminates cross-site scripting vulnerability
        httpOnly: true,
      })
      .status(200)
      .send(`Hello, ${foundUser.username} successfully logged in`);
  } catch (error) {}
};
// add user. req and res are comming from express
export const createUser = async (req, res) => {
  try {
    // to hide passwords we will use bcrypt library
    // salt takes our incryption key and tries to encrypt it. Default is 10 times (=rounds)
    const salt = bcrypt.genSaltSync(10);

    // with hash we would return a promise. With hashSynce no promise is returned
    const hashPassword = bcrypt.hashSync(req.body.password.toString(), salt);

    const newUser = new userModel({
      ...req.body,
      password: hashPassword,
      isAdmin: false,
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
