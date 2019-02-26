const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    external: {
        type: Boolean
    },
    university: {
        type: String,
        required: true
    },
    track: String,
    regno: String,
    ieee_member: Boolean,
    ieee_id: String,
    gender: String

})

const regsModel = mongoose.model('registrations',regsSchema);

module.exports = regsModel;