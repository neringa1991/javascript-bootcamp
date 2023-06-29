import express from "express";

import {
  countUsers,
  sortUsers,
  limitUsers,
} from "../controllers/userController.js";

const router = express.Router();
router.get("/get-count", countUsers);
router.get("/get-sorted", sortUsers);
router.get("/get-limit", limitUsers);

export default router;
