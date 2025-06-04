const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// handle middlewares
app.use([morgan("dev"), cors(), express.json()]);

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.get("/health", (req, res) => {
  res.status(200).send({ message: "Ok" });
});

// Not found 404 error handle
app.use((req, res, next) => {
  const error = new Error("Resources not found");
  error.status = 404;
  next(error);
});

// hanld global error
app.use((err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  res.status(500).json({message:"Something want wrong!"})
});


app.listen(5000, (req, res) => {
  console.log("Server is runing on port 5000");
});
