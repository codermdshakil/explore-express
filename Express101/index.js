const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

// Your existing routes

// res.status
// res.send

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

// res.sendFile using these we can sent a file from server to client
app.get("/sendfile", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

// res.append this value shown in header section
app.get("/explore", (req, res) => {
  res.append("Link", ["<http://localhost/>", "<http://localhost:3000/>"]);
  res.append("Set-Cookie", "foo=bar; Path=/; HttpOnly");
  res.append("Warning", "199 Miscellaneous warning");

  res.format({
    text() {
      res.send("hey");
    },

    html() {
      res.send("<p>hey</p>");
    },

    json() {
      res.send({ message: "hey" });
    }

  });

  console.log(res.get('Content-Type'));

});

// res.cookie set in cookie section
app.get("/cookie", (req, res) => {
  res.cookie("name", "tobi", {
    domain: ".example.com",
    path: "/admin",
    secure: true,
  });
  res.cookie(
    "ShakilAhmed",
    { name: "Shakil Ahmed", age: 21, profession: "Software Developer" },
    { expires: new Date(Date.now() + 900000), httpOnly: true }
  );
  res.send("Cookies");
});

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

app.get("/help", (req, res) => {
  res.send("This is the help page.");
});

// 404 Handler (Always keep at the end)
app.use((req, res, next) => {
  res.status(404).send("Hello ami error aisa porse!");
});

app.listen(4000, (req, res) => {
  console.log("Server listing  On PORT 4000");
});

function handler(req, res, next) {
  // read request object
  // process request
  // response back the result
}


// summary 
// Method	Description & Example
// res.send() -> 	Sends a plain text or HTML response.  📝 res.send('Hello World')
// res.json()	-> Sends a JSON response.  📝 res.json({ name: 'John' })
// res.status() -> 	Sets HTTP status code.  📝 res.status(404).send('Not found')
// res.sendStatus() ->	Sets status code and sends its string.  📝 res.sendStatus(200) → OK
// res.set() ->	Sets a response header.  📝 res.set('Content-Type', 'text/plain')
// res.get() ->	Gets the value of a response header.
// res.cookie() -> 	Sets a cookie.  📝 res.cookie('token', 'abc123')
// res.clearCookie() -> 	Clears a cookie.
// res.redirect() ->	Redirects to another URL.  📝 res.redirect('/login')
// res.render()	 -> Renders a view template (e.g., EJS, Pug).  📝 res.render('home', { title: 'Home' })
// res.download() -> 	Sends a file for download.
// res.sendFile() -> 	Sends a file as response.  📝 res.sendFile(__dirname + '/file.pdf')
// res.end() ->	Ends the response process.