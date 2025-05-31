const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    `
        <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nodejs you are Awsome!!</title>
            <style>
            .container{
                background-color: #dddeee;
                padding: 20px;
                border-radius: 20px;
            }
            </style>
            </head>
            <body>

            <div class="container">
            <h2>Hello! Nodejs you are Awsome!!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem optio id! Laudantium officia tempore ab hic suscipit, tenetur nam quas nemo, ullam alias ipsam ad perspiciatis, accusamus nobis ea!</p>
            </div>

            </body>
            </html>
                    
        `
  ); 
});

app.listen(4000, (req, res) => {
  console.log("Server listing  On PORT 4000");
});


function handler(req, res, next){
    // read request object
    // process request
    // response back the result
}