const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema(
  {
    name: String
  },{
    timestamps: true
  }
);

const Api = mongoose.model('Api', apiSchema);

module.exports = Api;
