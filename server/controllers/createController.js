const createController = {};

createController.getStory = (req, res, next) => {
  console.log('In getStory');
  return next();
};

createController.getImages = (req, res, next) => {
  console.log('In getImages');
  return next();
};

module.exports = createController;
