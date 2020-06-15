'use strict';
const events = require('./events.js');
require('./caps.js');

events.on('pickup', payload => {
    setTimeout(() => {
        pickupHandler(payload);
    }, 100);
});
events.on('delivered', payload => {
    setTimeout(() => {
        deliveryHandler(payload)
    }, 100);
});

function pickupHandler(payload) {
    console.log('DRIVER: picked up', payload.orderID);
}
function deliveryHandler(payload) {
    console.log('DRIVER: delivered up', payload.orderID);

}
