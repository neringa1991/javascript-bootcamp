import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// NEW CODE
const ADMIN_ROUTES = ["/get-all", "delete-all"];

const verifyUser = (req, res, next, username) => {
  if (req.body.username || req.params.username === username) {
    return next();
  }
  return res.status(400).send("Token is invalid");
};

const verifyAdmin = (res, next, user) => {
  if (user?.isAdmin) {
    return next();
  }
  return res.status(400).send("Token is invalid");
};
// next will allow to go further if confditions are met
export const verifySessionToken = (req, res, next) => {
  // NEW CODE
  console.log(req.rawHeaders);
  // const token = req.rawHeaders[5].split("=")[1];
  const token = req.headers.cookie.split("session_token=")[1];
  // to access cookies
  // const token = req.body.session_token;
  if (!token) {
    return res.status(401).send("Not authorized");
  }

  // to verify if token is valid. To access key inside .env file, we use rocess.env.JWT_SECRET
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).send("Token is invalid");
    }
    // req.userToken = decodedToken;
    const user = userModel.findById(decodedToken.id);
    if (user.isAdmin || ADMIN_ROUTES.includes(req.route.path)) {
      verifyAdmin(res, next, user);
    } else {
      verifyAdmin(req, res, next, user);
    }
    next();
    // const foundUser = userModel.findOne({username: req.username});
    verifyUser(req, res, next, user?.username);
  });
};
