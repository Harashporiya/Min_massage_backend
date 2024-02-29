const mongoose = require('mongoose');

const addMsgSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    visitHistory:[ { timestamp:{type:Number}}],
},{timestamps:true});

const AddMsg = mongoose.model('AddMsg', addMsgSchema);

module.exports = AddMsg;
