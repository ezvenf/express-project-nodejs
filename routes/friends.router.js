const express = require("express");

const friendsRouter = express.Router();
const friendsController = require("../controllers/friends.controller");

// Custom Middleware
friendsRouter.use((req, res, next) => {
  console.log("IP address", req.ip);
  next();
});

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/:friendId", friendsController.getIndividualFriend);

module.exports = friendsRouter;
