const express = require('express') 
const mongoose = require('mongoose') 
const url = 'mongodb+srv://tpgit:tpgit2020@bookbank.w18lj.mongodb.net/bookbank?retryWrites=true&w=majority' 
const PORT = process.env.PORT || 7000;

const app = express() 

mongoose.connect(url, {useNewUrlParser:true}) 
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
const con = mongoose.connection 

con.on('open', () =>{  
    console.log('Connected...')
})

app.use(express.json())

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

const alienRouter = require('./routes/aliens')
app.use('/posts', alienRouter)

app.listen(PORT, () =>{
    console.log('Server Started')
})
