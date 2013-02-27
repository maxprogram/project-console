var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    'name': String,
    'order': Number,
    'one': String,
    'two': String,
    'three': String,
    'created_at': Date,
    'updated_at': Date
});

schema.methods.getOrder = function() {
    return this.order;
};

module.exports = mongoose.model('Project', schema);