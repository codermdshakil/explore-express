const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const app = express();
const router = express.Router();



// these middleware works in globally for every route 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(router)


// when we use gloableMidleware we don't need to call the middleware function [if we maintain singature]
app.use(gloablMiddleware)
 
router.get('/', (req, res) => {
  res.send('Hello world')
})

// use a specific middleware
router.get('/about', morgan('dev'),(req, res) => {
  res.send('About')
})

// when we need multiple middleware we can simply use array
router.get('/abouts',[morgan('dev'), cors()] , (req, res, next) => {
  res.send('This is abouts')
})

router.get('/help', (req, res) => {
  res.send('Help')
});


// use localmiddleware in specific route. Just give name of local middleware don't call it
router.get('/middleware',localMiddleware ,(req, res, next) =>{
  console.log('I am local middleware');
  res.send("Local middlewares")
})


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

  next()
}

// local middleware
function localMiddleware(req, res, next){
  next()
}


app.listen(5000, (req, res) =>{
  console.log('Application is running on PORT 5000');
})



// ### Use Routers when:

// - Your app is growing and has **multiple routes**.
// - You want to **organize your code** by feature or resource.
// - You want **modular and reusable** route files.