const express = require("express");

const app = express();

app.use(express.json());

// Your existing routes
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});


app.get('/help', (req, res) => {
  res.send('This is the help page.');
});



// 404 Handler (Always keep at the end)
app.use((req, res, next) => {
  res.status(404).send("Hello ami error aisa porse!")
})


app.listen(4000, (req, res) => {
  console.log("Server listing  On PORT 4000");
});


function handler(req, res, next){
    // read request object
    // process request
    // response back the result
}