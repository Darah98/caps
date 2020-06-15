'use strict';
require('faker');
const events = require('../events.js');
events.on('pickup', (payload) => eventLogger('pickup', payload));
events.on('in-transit', (payload) => eventLogger('in-transit', payload));
events.on('delivered', (payload) => eventLogger('delivered', payload));
require('../vendor/vendor.js');
function eventLogger(event, payload) {
    if (event === 'delivered') {
            console.log('VENDOR: Thank you for delivering ', payload.orderID);
    }
    const timestamp = new Date();
    console.log('EVENT:', { event, timestamp, payload });
}
