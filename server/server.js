// require('./config/config');
const config = require('config');

console.log(config.get('Level'));
console.log(config.get('MONGOURI'));
console.log(config.get('PORT'));
//const mongoose = require('./db/mongoose');
