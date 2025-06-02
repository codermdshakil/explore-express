const express = require("express");
const fs = require('fs');
const path = require("path");

const app = express();

app.use(express.json());

// Your existing routes


// res.status
// res.send

app.get('/', (req,res) => {
  res.status(200).send("Hello world")
})

// res.sendFile using these we can sent a file from server to client
app.get('/sendfile', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'))
})




// app.get('/', (req, res) => {

//   fs.readFile('./pages/index.html', (err, data) =>{

//     if(err){
//       console.log('Error');
//       res.send('<h1>Something went wrong</h1>')
//     }
//     else{
//       res.write(data)
//       res.end()
//     }
//   })
//   // res.send('Welcome to the homepage!');
// });


// res.download example 
// app.get('/about', (req, res) => {
//   res.download('./img/mql5.png', (err) => {
//     if (err) {
//       res.status(500).send('Error downloading file.');
//     }
//   });
// });


// res.redirect example -
// app.get('/about', (req, res) => {
//   res.redirect('/help')
// });





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