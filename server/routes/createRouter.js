const express = require("express");
import { createController } from "../controllers/createController";
const createRouter = express.Router();

// GET request to main endpoint
createRouter.get(
  "/",
  createController.getStory,
  createController.getImages,
  (req, res) => {
    return res.status(200).send("Hello from Server");
  }
);

module.exports = createRouter;
