
const express = require('express');

const app = express();


app.get('/', (req, res, next) => {
    res.send('Hello world')
})

app.get('/health', (req, res) => {
    res.send("OK")
})



app.listen(5000, (req, res) => {
    console.log('Server is runing on port 5000');
})

