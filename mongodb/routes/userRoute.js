import express from "express";

import {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create", createUser);

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

router.get("/get-all", getAllUsers);
router.get("/get/:username", getUser);
router.delete("/delete/:username", deleteUser);
router.put("/update/:username", updateUser);

// params is below and body is url
//req.params.name123

export default router;
