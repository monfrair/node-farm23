'use strict';
// blocking sync way
const fs = require('fs');
const http = require('http');
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `this is what we know about this fruit: ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('file written');

// non=blocking async rest of code will run while task below is completed
// err always the first in case of error, the data 2nd argument could be called anything
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  if (err) return console.log('ERROR 💥');
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      console.log(data3);

      fs.writeFile(
        './txt/final.txt',
        `${data2}\n${data3}`,
        'utf-8',
        // since no data being passed, only written only the err argument is needed.
        err => {}
      );
      console.log('your file has been written');
    });
  });
});
console.log('will read this first?');
