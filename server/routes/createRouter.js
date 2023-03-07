const express = require('express');
const createController = require('../controllers/createController');
const createRouter = express.Router();

// GET request to main endpoint
createRouter.post(
  '/',
  createController.getStory,
  createController.splitText,
  /*  createController.getImages, */
  (req, res) => {
    console.log('res.locals.story', res.locals.story);
    console.log('res.locals.splitStory', res.locals.splitStory);
    return res.status(200).json({
      story: res.locals.splitStory,
      images: res.locals.images,
    });
  }
);

module.exports = createRouter;
