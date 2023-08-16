// we create model.js file in order to use mongoose
import mongoose from "mongoose";

// we create a structure
const studentSchema = new mongoose.Schema(
  {
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
    email: {
      type: String,
    },

    // hasOwner: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  // it will keep track of createdAt and updatedAt timestamps
  {timestamps: true}
);
// by the below line we create a model. If we don't have the collection with name "students", it would be created. It is automatically changed to plural
export default mongoose.model("student", studentSchema);
