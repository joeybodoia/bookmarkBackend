//Bringing in Express
const express = require("express")
const app = express()
const PORT = 3005

// Mongoose
const mongoose = require('mongoose')
const cors = require("cors")

//OTHER IMPORTS
const morgan = require("morgan");
const bookmarkRouter = require("./controllers/bookmark");

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb+srv://joeybodoia:a1b2c3d4@sei.44xol.azure.mongodb.net/bookmark?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})


// MIDDLEWARE 
app.use(express.json()); //use .json(), not .urlencoded()


// CORS
const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors()) // Note: all routes are now exposed. If you want to limit access for specific verbs like POST or DELETE you can look at the npm documentaion for cors (for example with OMDB - it's ok for anyone to see the movies, but you don't want just anyone adding a movie)


//Route for testing server is working
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

// Dog Routes send to dog router
app.use("/bookmark", bookmarkRouter);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})