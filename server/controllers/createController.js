const { OPENAI_API_KEY } = require('../util/config.js');
const { Configuration, OpenAIApi } = require('openai');

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
        message: { err: 'Error occurred in createController.getStory' },
      });
    }
    // requesting text from api
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 200,
    });
    // console.log('completion', completion);
    const firstStory = completion.data.choices[0].text;
    res.locals.story = firstStory;
    return next();
  } catch (error) {
    if (error.response) {
      return next({
        log: `OpenAI API 'getStory' error in createController.getStory middleware: ${error.response.data}`,
        status: error.response.status,
        message: {
          err: 'An error occurred, please check server logs for details.',
        },
      });
    } else {
      return next({
        log: `OpenAI API 'getStory' error in createController.getStory middleware: ${error.message}`,
        message: {
          err: 'An error occurred, please check server logs for details.',
        },
      });
    }
  }
};

createController.splitText = (req, res, next) => {
  // store generated story in local variable
  const story = res.locals.story;
  // split string on line
  const splits = story.split('\n');
  // create object that will be passed onto next middleware
  const splitStory = {};
  // initialize counter to manage object key values
  let counter = 1;
  // iterate through array
  splits.forEach((split) => {
    // if a split is empty, don't add split into splitStory object
    if (!split.length) {
      return;
    } else {
      splitStory[counter] = split;
      counter++;
    }
  });
  // store splitStory into res.locals.splitStory
  res.locals.splitStory = splitStory;
  // move onto next middleware
  return next();
};

createController.getImages = (req, res, next) => {
  return next();
};

module.exports = createController;
