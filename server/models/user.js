var mongoose = require('mongoose');

const UserSchema  = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    // password: {type: String, required: true}, -> TODO: Needs to be added along with Auth
    address: { type: Object },
    orders: { type: Object },
    products: { type: Object },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;