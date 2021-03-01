const mongoose = require('mongoose')


const dbSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    created:{
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Posts', dbSchema)
