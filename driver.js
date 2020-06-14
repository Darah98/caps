'use strict';
require('dotenv').config();
const events= require('./events.js');

events.on('pickup', pickupHandler);
events.on('in-transit', transitHandler);
events.on('delivered', deliverHandler);

function pickupHandler(payload){
    console.log(`Driver picked up--${payload}`);
}
function transitHandler (payload){
    console.log(`${payload}`);
}
function deliverHandler(payload){
    console.log(`
    Driver delivered--${payload}`);
}

