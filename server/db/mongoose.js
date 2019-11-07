const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = global.Promise;
console.log(`[${config.get('MONGOURI')}`);
mongoose.connect(config.get('MONGOURI'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    mongoose
};
