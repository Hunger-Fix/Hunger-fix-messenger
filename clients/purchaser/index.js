'use strict';
const { io } = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';
let driverSocket = io(SERVER_URL + '/hungry');
const Chance = require('chance');

const chance = new Chance();

const { SubmitOrder } = require('./handler');

let payload = {
  id : chance.guid(),
  storeName: chance.company(),
  purchaseName: chance.name(),
  food: 'pizza',
  status: ""
};

driverSocket.on('status', (payload) => {
  console.log(`Order Status: ${payload.status}`);
}
);

SubmitOrder(payload, driverSocket);