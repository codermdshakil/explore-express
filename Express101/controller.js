const morgan = require("morgan");
const cors = require('cors')

exports.homeController = (req, res) => {
  res.send('Hello world')
} 

exports.aboutController = (morgan('dev'), (req, res) => {
  res.send('About')
})

exports.aboutsController = ([morgan('dev'), cors()] ,(req, res) => {
  res.send('This is abouts')
})


exports.helpController = ((req,res) => {
      res.send('Help')
})

exports.middlewareController = ((req,res) => {
    
    console.log('I am local middleware');
    res.send("Local middlewares")
})
