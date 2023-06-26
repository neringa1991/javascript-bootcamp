import mongoose from "mongoose";
// we will create a scheme of students
const studentSchema = new mongoose.Schema(
  {
    // we will type properties
    name: {
      type: String,
      required: true,
      unique: true,
    },
    grade: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },
    //this will be optional
    email: {
      type: String,
    },
  },
  {timestamps: true}
);

export default mongoose.model("student", studentSchema);
