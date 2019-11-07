const validator = require('validator');

const { mongoose } = require('./../db/mongoose');

let UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'entered a not vali eail address'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
});

let User = mongoose.model('User', UserSchema);

module.exports = {
    User
};
