const mongoose = require('mongoose')


const dbSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('login', dbSchema)