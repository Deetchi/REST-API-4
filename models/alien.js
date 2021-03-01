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
        type: Date
    }
})

module.exports = mongoose.model('Posts', dbSchema)
