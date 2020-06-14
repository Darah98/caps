'use strict';
// const faker= require('faker');
const events= require('./events.js');
require('./vendor.js');
require('./driver.js');
require('./caps.js');


events.emit('pickup', 'orderInfo');
events.emit('in-transit', 'orderInfo');
events.emit('delivered', 'orderInfo');