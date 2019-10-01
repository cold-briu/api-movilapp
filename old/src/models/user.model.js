const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    lastName: String,
    phone: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);