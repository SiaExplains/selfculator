// require('./config/config');
const config = require('config');
const { User } = require('./model/user');
const express = require('express');
const { Logger } = require('logmog');

let logmog = new Logger(true);

let readConfigurations = () => {
    logmog.cfline('#', 50);
    logmog.cflog('Application start');
    logmog.cflog('Reading configuraion...');
    logmog.cfline('+-+', 30);
    logmog.cflog(`Level : ${config.get('Level')}`);
    logmog.cflog(`DB : ${config.get('MONGOURI')}`);
    logmog.cflog(`PORT : ${config.get('PORT')}`);
    logmog.cfline('+-+', 30);
};

let app = express();

readConfigurations();

app.get('/', (req, res) => {
    res.send('Selfculator (/) Api');
});

app.listen(config.get('PORT'), () => {
    logmog.cflog(
        `Selfculator Server API Started and Listening on PORT: ${config.get(
            'PORT'
        )}`
    );
});

// logmog.flog(‍‍‍‍‍‍'Level : ');

// Console.log('------------------------------');
// console.log('LEVEL: ', config.get('Level'));
// console.log('DB: ', config.get('MONGOURI'));
// console.log('PORT: ', config.get('PORT'));
// let app = express();

// let newUser = new User({
//     fullName: 'Siavash Ghanbari',
//     email: 'sia.qnbr@gmail.com',
//     password: '123456'
// });

// newUser.save().then(res => {
//     console.log('User has been saved', res);
// });
