const { Configuration, OpenAIApi } = require("openai");
const createController = {};

createController.getStory = (req, res, next) => {
  console.log("In getStory");
  return next();
};

createController.getImages = async (req, res, next) => {
  const configuration = new Configuration({
    apiKey: "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",
  });

  // const story = res.locals.story;

  try {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: "A cute, white, fluffy puppy dog",
      n: 1,
      size: "1024x1024",
    });

    const images = response.data.data[0].url;
    console.log(images);

    return next();
  } catch (err) {
    return next({
      log: `OpenAI API 'createImage' error in createController.getImages middleware: ${err.message}`,
      status: err.response.status,
      message: {
        err: "An error occurred, please check server logs for details.",
      },
    });
  }
};

module.exports = createController;
