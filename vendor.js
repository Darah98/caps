'use strict';
require('dotenv').config();
const faker= require('faker');
const events= require('./events.js');

const orderInfo= {
    store: process.env.STORE_NAME,
    orderID: faker.random.uuid,
    customer: faker.name.findName,
    address: faker.address.city,
}
events.on('pickup', pickupHandler);
events.on('in-transit', transitHandler);
events.on('delivered', deliverHandler);

function pickupHandler(payload){
    console.log(`--payload--${payload}`);
}
function transitHandler (payload){
    console.log(`-----${payload}`);
}
function deliverHandler(payload){
    console.log(`
    THANK YOU for delivering:
    -----${payload}`);
}

