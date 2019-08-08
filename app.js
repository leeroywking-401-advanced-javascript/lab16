'use strict';

const fs = require('fs');

require('./logger.js');
const events = require('./events')


/**
 *
 *
 * @param {*} file
 */
const /**
 *
 *
 * @param {*} err
 * @param {*} data
 */
alterFile = (file) => {

  fs.readFile( file, (err, data) => {
    if(err) {
      events.emit('error', err)
      // throw err; 
    }
    let text = data.toString().toUpperCase();
    
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { 
        events.emit('error', err)
        // throw err; 
      }
      events.emit('success', `${file} was saved successfully you gangsta`)
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
