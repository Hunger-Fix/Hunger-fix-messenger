'use strict';
// Use the socket.io npm package to configure an event Server that can be started at a designated port using node.
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;
const io = new Server(PORT);

let hungry = io.of('/hungry');

//EVENT Logger
const date = new Date();
function logger (eventName, payload){
  let event = {};
  event.event = eventName;
  event.time = date;
  event.payload = payload;
  console.log(event);
}

hungry.on('connection', (socket) => {
  console.log('CLIENT CONNECTED TO /hungry', socket.id);

  socket.on('order', (payload) => {
    hungry.emit('order', payload);
    console.log('payload: ', payload)

  });

  socket.on('status', (payload)=>{
    hungry.emit('status', payload);
    console.log('back to server: ', payload)
  })



});


