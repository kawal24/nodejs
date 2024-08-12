const express = require("express");
// const { listUsers } = require('../controllers/users.controller')

const { created, getUser,updateUser } = require("../controller/user.controller");
const usersRouter = express.Router();

// list

// usersRouter.get("/",listUsers)
usersRouter.post("/users", created);
usersRouter.get("/users", getUser);
usersRouter.put("/users", updateUser);

module.exports = usersRouter;
