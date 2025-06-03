
const cors = require('cors')
const morgan = require('morgan')
const router = require('express').Router();


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
router.get('/middleware',(req, res, next) =>{
  console.log('I am local middleware');
  res.send("Local middlewares")
})

module.exports = router;
