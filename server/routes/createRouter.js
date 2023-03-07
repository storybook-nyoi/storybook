const express = require("express");
const createController = require("../controllers/createController");
const createRouter = express.Router();

// GET request to main endpoint
createRouter.get(
  "/",
  createController.getStory,
  createController.getImages,
  (req, res) => res.status(200).send("Hello from server")
);

module.exports = createRouter;
