require('dotenv').config();

// const DALLE_API_KEY = process.env.DALLE_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const PORT = process.env.PORT;

module.exports = { PORT, OPENAI_API_KEY };
