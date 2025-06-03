const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// these middleware works in globally for every route 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

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
})


app.listen(5000, (req, res) =>{
  console.log('Application is running on PORT 5000');
})

