const express = require("express");
const cors = require("cors");
const app = express();

// Bring in Routes
const createRouter = require("./routes/createRouter");

// Defines cors middleware configuration
// const corsOptions = {
//   credentials: true,
//   origin: (origin, callback) => {
//     callback(null, true);
//   },
// };

// Apply CORs with options, and handling parsing request body
app.use(cors(/*corsOptions*/));
app.use(express.json());

// Set up Routes
app.use("/create", createRouter);

// Route to serve up main App
app.get("/", (req, res) => res.status(200).sendFile());

// Catch-All Route Handler
app.use("*", (req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
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
