const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello from EC2 + Node.js on port 80!');
});
server.listen(80, '0.0.0.0', () => console.log('Server running on port 80'));
