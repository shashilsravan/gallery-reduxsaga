const mongoose = require('mongoose');

const pictureSchema = mongoose.Schema({
    name: {
        type: String, required: true, default: ""
    }, url: {
        type: String, required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Picture", pictureSchema)