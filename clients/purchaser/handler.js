'use strict';

// const emitter = require('../../eventPool');


function SubmitOrder(payload, socket) {
  socket.emit('order', payload);
}


module.exports = {
  SubmitOrder
};