const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const items = require('./routes/api/items')
const path = require('path')




app.use(bodyParser.json())

// serve static ssets if in production mode



//DB Config
const db = require('./config/keys').mongoURI

// Connectiong to mongodb server

mongoose.connect(db)
.then(()=> console.log('MongoDB connected')).catch((err)=> console.log(err))

//use routes 
app.use('/api/items',items)





// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});






const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`Server started on port ${port}`))
