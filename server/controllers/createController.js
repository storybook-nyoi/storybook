export const createController = {
  createController: (req, res, next) => {
    console.log("In getStory");
    return next();
  },

  getImages: (req, res, next) => {
    console.log("In getImages");
    return next();
  },
};

// createController.getStory = (req, res, next) => {
//   console.log("In getStory");
//   return next();
// };

// createController.getImages = (req, res, next) => {
//   console.log("In getImages");
//   return next();
// };
