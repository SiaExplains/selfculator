const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = global.Promise;
console.log(`[${config.get('MONGOURI')}`);
mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    mongoose
};
