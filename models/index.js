const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

mongoose.set('debug', true);
mongoose.Promise = global.Promise;


//import the model from user and export through index
exports.User = require('./User');