'use strict';
require('dotenv').config();
const faker = require('faker');
const net = require('net');
const PORT = process.env.PORT || 3000;
const capServer = net.createServer();
let socketPool = {};

capServer.on('connection', (socket) => {
  const socketID = faker.random.uuid();
  console.log(`User connected, ID:${socketID}`);
  socketPool[socketID] = socket;
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('error', (err) => { console.log(`Error with socket ->> ${err}`); });
  socket.on('end', (end) => {
    console.log('Connection Ended', end);
    delete socketPool[socketID];
  });
});

capServer.on('error', (err) => {
  console.log(`Error in Server ->> ${err}`);
});

function dispatchEvent(buffer) {
  let payload = JSON.parse(buffer.toString().trim());
  pickupLogger('pickup', payload); 
  transitLogger('in-transit', payload); 
  deliveryLogger('delivered', payload); 
}

function broadcast(message) {
  let payload = JSON.stringify(message);
  for (let socket in socketPool) {
    socketPool[socket].write(payload);
  }
}


function pickupLogger(event, payload) {
  const timestamp = new Date();
  console.log({ event, timestamp, payload });
  payload.event= event;
  broadcast(payload);
}
function transitLogger(event, payload) {
  const timestamp = new Date();
  console.log({ event, timestamp, payload });
  payload.event= event;
  broadcast(payload);
}
function deliveryLogger(event, payload) {
  const timestamp = new Date();
  console.log({ event, timestamp, payload });
  payload.event= event;
  broadcast(payload);
}

capServer.listen(PORT, () => {
  console.log(`Server is up and running, port: ${PORT}`);
});