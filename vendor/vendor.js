'use strict';
require('dotenv').config();
const faker = require('faker');
const net= require('net');
const { setInterval } = require('timers');
const client= net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
client.connect(PORT, HOST, ()=> {console.log('Connected');});
const messages = [];
client.on('data', function(data){ 
  let evntDetails = JSON.parse(data.toString());
  if (evntDetails.event == 'delivered') {
    console.clear();
    messages.push(evntDetails);
    messages.forEach(()=> console.log('VENDOR: Thank you for delivering ', evntDetails.orderID));
  }
});
  
setInterval(
  function () {
    let orderInfo = {
      store: process.env.STORE_NAME,
      orderID: faker.random.uuid(),
      customer: faker.name.findName(),
      address: faker.address.streetAddress(),
    };
    const order = JSON.stringify(orderInfo);
    client.write(order);
  }, 5000);