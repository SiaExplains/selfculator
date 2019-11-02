const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.SELFCULATOR_CONNECTION, { useNewUrlParser: true });

module.exports = {
    mongoose
};
