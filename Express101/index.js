const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// these middleware works in globally for every route 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// when we use gloableMidleware we don't need to call the middleware function [if we maintain singature]
app.use(gloablMiddleware)

app.get('/', (req, res) => {
  res.send('Hello world')
})

// use a specific middleware
app.get('/about', morgan('dev'),(req, res) => {
  res.send('About')
})

// when we need multiple middleware we can simply use array
app.get('/abouts',[morgan('dev'), cors()] , (req, res, next) => {
  res.send('This is abouts')
})

app.get('/help', (req, res) => {
  res.send('Help')
});


// syntax of middleware
// - if everything seems ok then most of the time controller will call response methods
// - if everything seems ok then most of the time middleware call next that means next middleware

function handler(req, res, next){

  // read request object
  // process request
  // response back the result
}


function middlewareSignature(req, res, next){

  next(); // if we don't call next then our system will hang
}

// create custom middleware
function gloablMiddleware(req, res,next){
  console.log(`${req.method} - ${req.url}`);
  console.log('I am a global middlewares');

  if(req.query.bad){
    return res.status(400).send('Bad request')
  }
  else{
    return res.send("Good request")
  }

  next()
}


app.listen(5000, (req, res) =>{
  console.log('Application is running on PORT 5000');
})

