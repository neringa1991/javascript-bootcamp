import userModel from "../models/userModel.js";

// Task for today:
// Use existing NoSQL DB that you have built already and implement on top of it some additional routes using following query methods from mongoose:

// count: Returns the count of documents that match the specified criteria.
// sort: Sorts the retrieved documents based on a specified field or fields.
// limit: Limits the number of retrieved documents.

// count: Returns the count of documents that match the specified criteria.
export const countUsers = async (req, res) => {
  try {
    const usersCount = await userModel.countDocuments({username: "Aleksas2"});
    res.status(201).json(usersCount);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// sort: Sorts the retrieved documents based on a specified field or fields.
export const sortUsers = async (req, res) => {
  try {
    const sortedUsers = await userModel
      .find({}, {password: 0})
      .sort({username: "asc"});

    res.status(201).send(sortedUsers);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

//limit: Limits the number of retrieved documents.
export const limitUsers = async (req, res) => {
  try {
    const limitedUsers = await userModel.find({}, {password: 0}).limit(3);
    res.status(201).send(limitedUsers);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
