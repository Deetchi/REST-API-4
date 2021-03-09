const mongoose = require('mongoose')


const dbSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('login', dbSchema)