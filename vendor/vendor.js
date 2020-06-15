'use strict';
require('dotenv').config();
const faker = require('faker');
const events = require('../events.js');
require('../caps/caps.js');
    require('../driver/driver.js');
function orderFaker() {
    let orderInfo = {
        store: process.env.STORE_NAME,
        orderID: faker.random.uuid(),
        customer: faker.name.findName(),
        address: faker.address.streetAddress(),
    }
    return orderInfo;
}
setInterval(function () {
    const order = orderFaker();
    setTimeout(() => {
        events.emit('pickup', order);
    }, 1000);
    setTimeout(() => {
        events.emit('in-transit', order);
    }, 1500);
    setTimeout(() => {
        events.emit('delivered', order);
    }, 2500);
}, 5000);
module.exports = orderFaker;