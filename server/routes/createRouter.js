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

// const testObj = {
//   story: {
//     1: 'Once upon a time, in a kingdom far, far away, there was a beautiful princess named Aurora. She had long golden hair, bright blue eyes, and a smile that could light up the entire room. Aurora was loved by all her subjects for her kind heart and gentle nature.',
//     2: 'However, Aurora was not happy. She longed for adventure and excitement outside of her castle walls. One day, she decided to sneak out of the castle and explore the kingdom. While wandering in the forest, Aurora stumbled upon a handsome prince who was also seeking adventure.',
//     3: 'They quickly became friends and embarked on a thrilling journey together. They explored hidden caves, fought off bandits, and discovered secret treasures. Aurora was overjoyed to finally experience the excitement she had always craved.',
//     4: 'When it was time for Aurora to return to her castle, she realized that she had fallen in love with the prince. However, the prince revealed that he was actually a prince from a neighboring kingdom and could not stay with her.',
//     5: 'Despite their sadness, Aurora and the prince promised to never forget their thrilling adventure and to always cherish the memories they shared together. From that day on, Aurora felt content knowing that she had finally found the adventure and excitement she had been searching for.'
//   },
//   pictures: {
//     1: 'https://labs.openai.com/s/eN77jAxqGNVWJmGKu7Z1IPaT',
//     2: 'https://labs.openai.com/s/eN77jAxqGNVWJmGKu7Z1IPaT',
//     3: 'https://labs.openai.com/s/19ywct22NnKlYRVNbRJIP6lD',
//     4: 'https://labs.openai.com/s/IDrmjWbxzcCMpDHDnOQFqlFL',
//     5: 'https://labs.openai.com/s/IDrmjWbxzcCMpDHDnOQFqlFL'
//   }
// }
module.exports = createRouter;
