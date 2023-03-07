const express = require("express");
const createController = require("../controllers/createController");
const createRouter = express.Router();

// GET request to main endpoint
createRouter.post(
  "/",
  createController.getStory,
  createController.getImages,
  (req, res) => {
    return res.status(200).json({
      // story: res.locals.story,
      images: res.locals.images,
    });
  }
);

module.exports = createRouter;
