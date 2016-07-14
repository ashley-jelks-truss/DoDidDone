import Todo from './todo';
import User from './user';

const mongoose = require('mongoose');

User.findById('email').populate('Todo').exec(function(err, client ) {
  if (err) {
    console.log(err);
  }
  return client;
});

