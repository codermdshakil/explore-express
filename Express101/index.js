
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Hello world")
})


app.listen(5000,(req,res) =>{
    console.log('Server listing on 5000');
})