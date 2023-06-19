import express from "express";
const app = express();

app.use(express.json());

// THERE ARE 5 METHODS:
// POST - sends data to server
// GET -gets data from server
// PUT - update data on server
// DELETE -delete data on server
// PATCH- update data on server (partial update)

const users = [
  {id: 1, name: "Zymante"},
  {id: 2, name: "Neringa"},
  {id: 3, name: "Viola"},
  {id: 4, name: "Kristina"},
  {id: 5, name: "Vaida"},
];

const port = 5000;
// our route is getData
app.get("/", (req, res) => {
  res.send("Response from server (MAIN ROUTE)");
});

app.get("/users", (req, res) => {
  res.json(users);
  // res.send("Response from users route");
});

app.post("/create-user", (request, response) => {
  const requestFromUser = request.body;
  users.push(requestFromUser);
  response.status(201).json(users);
});

app.put("/update-user/:userId", (request, response) => {
  const requestFromUser = request.body;
  const userId = Number(request.params.userId);
  const updatedUsers = users.filter((user) => {
    return user.id !== userId;
  });
  updatedUsers.push(requestFromUser);
  response.status(201).json(updatedUsers);
});
app.delete("/delete-user/:userId", (request, response) => {
  const requestFromUser = request.body;
  const userId = Number(request.params.userId);
  const updatedUsers = users.filter((user) => {
    return user.id !== userId;
  });
  updatedUsers.push(requestFromUser);
  response.status(201).json(updatedUsers);
});
// port number is up to us
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
