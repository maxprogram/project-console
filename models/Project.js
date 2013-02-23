var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;
var schema = new mongoose.Schema({
    'id': ObjectId,
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