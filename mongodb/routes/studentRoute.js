import express from "express";
// we need curly braces because we did not do the default export inside studentControllers file
import {
  createStudent,
  getAllStudents,
  getStudent,
  deleteStudent,
  updateStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/create", createStudent);
router.get("/get-all", getAllStudents);
router.get("/get/:name", getStudent);
router.delete("/delete/:name", deleteStudent);
router.put("/update/:name", updateStudent);

// this will automatically export all the routes above
export default router;
