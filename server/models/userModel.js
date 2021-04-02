/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-else-return */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
const mongoose = require('mongoose');

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: Object },
  orders: { type: Object },
  products: { type: Object },
});

UserSchema.pre('save', function (next) {
  const user = this;

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(SALT_WORK_FACTOR, function (saltError, salt) {
      if (saltError) return next(saltError);
      else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) return next(hashError);
          user.password = hash;
          return next();
        });
      }
    });
  } else return next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
