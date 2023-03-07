const { OPENAI_API_KEY } = require('../util/config.js');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const createController = {};

createController.getStory = async (req, res, next) => {
  const prompt =
    'Tell me a story about a princess that goes out into the sea and finds an opportunity';

  try {
    const openai = new OpenAIApi(configuration);
    if (prompt === null) {
      console.log('No prompt provided.');
      return;
    }
    const res = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
    });
    const firstStory = res.data.choices[0].text;
    res.locals.story = firstStory;
    return next();
  } catch (err) {
    return next({
      log: `OpenAI API 'getStory' error in createController.getStory middleware: ${err.message}`,
      status: err.response.status,
      message: {
        err: 'An error occurred, pelase check server logs for details.',
      },
    });
  }
};

createController.getImages = (req, res, next) => {
  return next();
};

module.exports = createController;
