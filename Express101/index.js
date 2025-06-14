const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const app = express();



// these middleware works in globally for every route
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(require('./routers'))


// when we use gloableMidleware we don't need to call the middleware function [if we maintain singature]
// app.use(gloablMiddleware)
 



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
// function gloablMiddleware(req, res,next){
//   console.log(`${req.method} - ${req.url}`);
//   console.log('I am a global middlewares');

//   if(req.query.bad){
//     return res.status(400).send('Bad request')
//   }

//   next()
// }

// local middleware
// function localMiddleware(req, res, next){
//   next()
// }


// 404 handler (should always be last)
app.use((req, res, next) => {
  const error = new Error('404 not found!');
  error.status = 404;
  next(error)
});


// global error handle
app.use((error, req, res, next) => {

  if(error.status){
    return res.status(error.status).send(error.message)
  }

  res.status(500).send("Something went wrong!")
})


app.listen(5000, (req, res) =>{
  console.log('Application is running on PORT 5000');
})



