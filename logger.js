'use strict'

const events = require('./events')

events.on('error', payload => doLog('error', payload))
events.on('success', payload => doLog('success', payload))


/**
 *
 *
 * @param {*} action
 * @param {*} payload
 */
function doLog(action, payload){
    let message = `${action.toUpperCase()}`;
    console.log(message, payload);
  };