'use strict';
// blocking sync way
const fs = require('fs');
const http = require('http');
const url = require('url');

// SERVER build
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('this is the overview page');
  } else if (pathName === '/product') {
    res.end('this is the product page');
  } else if (pathName === '/api') {
    res.end('this is the product page');
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
