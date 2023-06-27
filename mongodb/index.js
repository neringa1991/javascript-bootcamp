import mongoose from "mongoose";
import express from "express";
// import studentRoute from "./routes/studentRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 3005;

// we can send json format from insomnia now. We notify express that we will use json format
app.use(express.json());

const connectionToDB = async () => {
  //async because we will await until something is resolved (connection is established)
  try {
    // we connect to the database
    await mongoose.connect(
      "mongodb+srv://neringakandrotaite:neringakandrotaite@cluster0.8r8mpkw.mongodb.net/user"
    );

    console.log("Connected to DB");
    // const newStudent1 = new Student({
    //   name: "Neringa",
    //   grade: 10,
    // });
    // newStudent1.save();
  } catch (error) {
    console.log(error);
  }

  //BELOW IS THE SAME AS ABOVE
  // mongoose
  //   .connect(
  //     "mongodb+srv://neringakandrotaite:neringakandrotaite@cluster0.8r8mpkw.mongodb.net/"
  //   )
  //   .then(() => {
  //     console.log("Connection to DB is successful");
  //   })
  //   .then(() => {
  //     console.log("second then");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};
// app.use("/student", studentRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  connectionToDB();
  console.log(`Server started on port ${port}`);
});
