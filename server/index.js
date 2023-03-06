const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(3001, () => {
  console.log(`Server listening on port: ${3001}`);
});
