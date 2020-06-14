'use strict';
const events= require('./events.js');

events.on('pickup', (payload)=> eventLogger('pickup', payload));
events.on('in-transit', (payload)=> eventLogger('in-transit', payload));
events.on('delivered', (payload)=> eventLogger('delivered', payload));

function eventLogger(event, payload){
    const timestamp= new Date();
    console.log(`
    EVENT: {
        event: ${event},
        time: ${timestamp},
        payload: ${payload}
    }
    `);
}

