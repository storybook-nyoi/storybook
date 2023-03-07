const { OPENAI_API_KEY } = require("../util/config.js");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const createController = {};

createController.getStory = async (req, res, next) => {
  const prompt = req.body.prompt;

  // get text data from api
  try {
    // checking prompt length
    if (!prompt.length) {
      return next({
        log: `Bad request. No prompt entered. Please try again.`,
        status: 400,
        message: { err: "Error occurred in createController.getStory" },
      });
    }
    // requesting text from api
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 200,
    });

    const firstStory = completion.data.choices[0].text;
    res.locals.story = firstStory;

    return next();
  } catch (error) {
    if (error.response) {
      return next({
        log: `OpenAI API 'getStory' error in createController.getStory middleware: ${error.response.data}`,
        status: error.response.status,
        message: {
          err: "An error occurred, please check server logs for details.",
        },
      });
    } else {
      return next({
        log: `OpenAI API 'getStory' error in createController.getStory middleware: ${error.message}`,
        message: {
          err: "An error occurred, please check server logs for details.",
        },
      });
    }
  }
};

createController.getImages = async (req, res, next) => {
  const splitStory = res.locals.splitStory;
  res.locals.images = {};

  // Get Images from DALL-E
  try {
    for (const key in splitStory) {
      const prompt = splitStory[key];

      // requesting Image Creation from DALL-E
      const image = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
      });

      const image_url = image.data.data[0].url;
      res.locals.images[key] = image_url;
    }
    return next();
  } catch (error) {
    // Catch any errors with the OpenAI API call
    if (error.response) {
      return next({
        log: `OpenAI API 'getImages' error in createController.getImages middleware: ${error.response.data}`,
        status: error.response.status,
        message: {
          err: "An error occurred, please check server logs for details.",
        },
      });
    } else {
      return next({
        log: `OpenAI API 'getImages' error in createController.getImages middleware: ${error.message}`,
        message: {
          err: "An error occurred, please check server logs for details.",
        },
      });
    }
  }
};

module.exports = createController;
