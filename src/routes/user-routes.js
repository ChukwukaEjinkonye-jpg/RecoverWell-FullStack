const express = require("express");
const userController = require("../controllers/user");
const addModels = require("../middleware/add-models");
const checkAuthentication = require("../middleware/check-authentication");

const Router = express.Router();
Router.use(addModels);

Router.get("/users", userController.list);
Router.post("/users", userController.create);
Router.get("/users/:id", userController.show);
// We can use middleware slotted in between the route and the controller as well
Router.patch("/users/:id", checkAuthentication, userController.updateUser);
Router.patch(
  "/users/profile-pic/:id",
  checkAuthentication,
  userController.updateProfilePic
);
Router.patch("/users/bio/:id", checkAuthentication, userController.updateBio);

Router.post("/login", userController.login);
Router.delete("/logout", userController.logout);
Router.get("/me", userController.showMe);

module.exports = Router;
