//contains logic
import studentModel from "../models/studentModel.js";

export const createStudent = async (req, res) => {
  try {
    const student = new studentModel({
      ...req.body,
    });
    // we save students inside our database
    await student.save();

    // we send message below
    res.status(201).send(`New student name: ${req.body.name} is created`);
  } catch (error) {
    //we will not see this in insomnia
    console.log(error);

    // this will be seen in insomnia
    res.status(400).send(error);
  }
};
export const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find({});
    res.status(201).send(students);
  } catch (error) {
    //we will not see this in insomnia
    console.log(error);

    // this will be seen in insomnia
    res.status(400).send(error);
  }
};
export const getStudent = async (req, res) => {
  try {
    //student/get/
    const student = await studentModel.find({name: req.params.name});
    res.status(201).send(student);
  } catch (error) {
    //we will not see this in insomnia
    console.log(error);

    // this will be seen in insomnia
    res.status(400).send(error);
  }
};
export const deleteStudent = async (req, res) => {
  try {
    //student/get/
    const student = await studentModel.deleteOne({name: req.params.name});
    res.status(201).send(student);
  } catch (error) {
    //we will not see this in insomnia
    console.log(error);

    // this will be seen in insomnia
    res.status(400).send(error);
  }
};
export const updateStudent = async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate(
      {
        name: req.params.name,
      },
      {
        $set: req.body,
      },
      {new: true}
    );

    res.status(201).send(student);
  } catch (error) {
    //we will not see this in insomnia
    console.log(error);

    // this will be seen in insomnia
    res.status(400).send(error);
  }
};
