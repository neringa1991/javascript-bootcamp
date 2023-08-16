// we don't need the below as we imported mongoose from "mongoose" when we use import keyword
// const mongoose = require("mongoose");

// to make server in NODEJS without express*************************************
// import http from "http";
// const port = 4000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/products" && req.method === "POST") {
//     const body = [];
//     // this is streams
//     req.on("data", (data) => {
//       // without toString() the data would be Buffer type
//       console.log(data.toString());
//     });
//     res.write("Hellow world!Products");
//     return res.end();
//   }
//   if (req.url === "/home") {
//     res.write("Hellow world!Home");
//     return res.end();
//   }
//   res.write("Hellow world!");
//   res.end();
// });

// server.listen(port, () => {
//   console.log("working");
// });

// ******************************************************************************

// import os from "os";
// // shows how much free memory my laptop has
// console.log(os.freemem());
// // shows architecture of my laptop
// console.log(os.arch());

// working with EXPRESS *********************************************************
// makes NODEjs efficient and lightweight
import express from "express";
import mongoose from "mongoose";
import studentModel from "./model.js";

const app = express();

// app.use((req, res, next) => {
//   // everything what is coming from front-end will be under req
//   // everything what is sent to front-end is under res(aka response)
//   // next() means you are done and can move forward, middleware

//   res.send("Hello");
// });

const connectionToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://neringakandrotaite:neringakandrotaite@cluster0.8r8mpkw.mongodb.net/"
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
// we need to use is in order to see data in parsed format
app.use(express.json());

app.get("/", async (req, res) => {
  // operation is asynchronous and resolves to the promise. To see all data we simply add {} to find() function
  const allStudents = await studentModel.find({});
  console.log(allStudents);
  res.json(allStudents);
  // res.status(201).send({name: "neringa"});
});
app.post("/", async (req, res) => {
  // we get undefined before if we don't use app.use(express.json()), because req.body data is coming in a form of json and this json has to be parsed
  const sendData = new studentModel(req.body);
  // console.log(req.body);

  // below is used in order to save data in our database
  const data = await sendData.save();
  // res.send("we got the data from front-end");

  // we send the response which we received after saving the data:   const data = await sendData.save();

  // sends back to front-end the status code and the data which was saved
  res.status(201).send(data);
});

// we created the server using this function
app.listen(4000, () => {
  // when server is created, we connect to mongoose
  connectionToDb();
  console.log("listening on");
});
// ******************************************************************************
// import dotenv from "dotenv";
// import blogRoute from "./routes/blogRoute";

// const app = express();
// dotenv.config();
// app.use(express.json());
// app.use("/blog", blogRoute);

// const connectionToDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log();
//   } catch (error) {}
// };

// app.listen(3001, () => {
//   connectionToDb();
//   console.log("server is connected");
// });
