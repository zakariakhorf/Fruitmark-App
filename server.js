const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const items = require('./routes/api/items')





app.use(bodyParser.json())



//DB Config
const db = require('./config/keys').mongoURI

// Connectiong to mongodb server

mongoose.connect(db)
.then(()=> console.log('MongoDB connected')).catch((err)=> console.log(err))

//use routes 
app.use('/api/items',items)







const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`Server started on port ${port}`))
