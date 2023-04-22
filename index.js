'use strict';
// blocking sync way
const fs = require('fs');
const http = require('http');
const url = require('url');

// SERVER build
// only executed once when code starts sync not async
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

// This gets executed over and over since it starts the server
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('this is the overview page');
  } else if (pathName === '/product') {
    res.end('this is the product page');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'Content-type': 'hello web',
    });
    res.end('<h1>page not found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log(`Listening for requests on port 8000`);
});
