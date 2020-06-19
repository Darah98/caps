'use strict';
require('dotenv').config();
const net = require('net');
const client= net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
client.connect(PORT, HOST, ()=> {console.log('Connected');});

client.on('data', function(data) {
  let order = JSON.parse(data);
  console.log(order.event, order.orderID);
  return order;
});
client.on('end', function() {
  console.log('Connection ended');
});