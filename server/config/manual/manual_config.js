/*
    this is absoultely okay but I prefer to use config package
    instead of handle configuration by myself.
*/
// const env = process.env.NODE_ENV || 'development';
// console.log(`*** ${env.toUpperCase()} ***`);

// if (env === 'development' || env === 'test') {
//     let config = require('./config.json');
//     let envConfig = config[env];

//     Object.keys(envConfig).forEach(key => {
//         process.env[key] = envConfig[key];
//     });
// }
