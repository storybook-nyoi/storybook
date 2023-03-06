const express = require('express');
const app = express();
const cors = require('cors');

// Defines cors middleware configuration
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    callback(null, true);
  },
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('*', (req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use(express.json());

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(err);
  return res.status(errorObj.status).json(errorObj.message);
});

// Listen to server on specified port (defined within config.js)
app.listen(3001, () => {
  console.log(`Server listening on port: ${3001}`);
});

module.exports = app;
