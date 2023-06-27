import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 3005;

app.use(express.json());

//needed for password hide
dotenv.config();

const connectionToDb = async () => {
  try {
    // below is used to hide the password
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

app.use("/user", userRoute);

app.listen(port, () => {
  connectionToDb();
  console.log(`Server started on port ${port}`);
});
