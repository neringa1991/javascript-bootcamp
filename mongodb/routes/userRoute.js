import express from "express";

import {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  loginUser,
} from "../controllers/userController.js";

import {verifySessionToken} from "../middleware/authenticationCheck.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/login", loginUser);

// below is the same as above
// router.post("/create", async (req, res) => {
//   try {
//     const newUser = new userModel({
//       ...req.body,
//     });

//     await newUser.save();

//     // if we don't send status, the route will not be resolved
//     res.status(201).send(`New user username: ${req.body.username} is created`);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// });

// we will add route which will configure our routes. This will be middleware which will allow the specific number of sessions. This will handle the session

// these routes needs to be protected
router.get("/get-all", verifySessionToken, getAllUsers);
router.get("/get", verifySessionToken, getUser);
router.delete("/delete", verifySessionToken, deleteUser);
router.put("/update", verifySessionToken, updateUser);

// params is below and body is url
//req.params.name123

export default router;
