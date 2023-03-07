const { OPENAI_API_KEY } = require('../util/config.js');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const createController = {};

createController.getStory = async (req, res, next) => {
  const prompt = req.body.prompt;

  try {
    const openai = new OpenAIApi(configuration);
    if (!prompt.length) {
      return next({
        log: `Bad request. No prompt entered. Please try again.`,
        status: 400,
        message: {
          err: 'Error occurred in createController.getStory',
        },
      });
    }
    const res = await openai.createCompletion(
      {
        model: 'text-davinci-003',
        prompt,
      },
      {
        timeout: 100000,
      }
    );
    // console.log('res', res);
    const firstStory = res.data.choices[0].text;
    // console.log('firstStory', firstStory);
    res.locals.story = firstStory;
    // console.log('res.locals.story', res.locals.story);
    return next();
  } catch (err) {
    return next({
      log: `OpenAI API 'getStory' error in createController.getStory middleware: ${err.message}`,
      status: err.response.status,
      message: {
        err: 'An error occurred, please check server logs for details.',
      },
    });
  }
};

createController.getImages = (req, res, next) => {
  return next();
};

module.exports = createController;
