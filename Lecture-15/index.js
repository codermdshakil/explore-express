const express = require("express");
const app = express();


app.use(express.json())

const books = [
  { id: 1, name: "The Alchemist", price: 550 },
  { id: 2, name: "1984", price: 780 },
  { id: 3, name: "To Kill a Mockingbird", price: 890 },
  { id: 4, name: "Pride and Prejudice", price: 620 },
  { id: 5, name: "The Great Gatsby", price: 430 },
  { id: 6, name: "Moby Dick", price: 710 },
  { id: 7, name: "The Catcher in the Rye", price: 860 },
  { id: 8, name: "Brave New World", price: 940 },
  { id: 9, name: "The Hobbit", price: 800 },
  { id: 10, name: "Fahrenheit 451", price: 670 },
  { id: 11, name: "Jane Eyre", price: 1150 },
  { id: 12, name: "Crime and Punishment", price: 990 },
  { id: 13, name: "Animal Farm", price: 480 },
  { id: 14, name: "The Lord of the Rings", price: 1200 },
  { id: 15, name: "The Book Thief", price: 730 }
];


function booksHandler(req, res) {
  if (req.query.show === "all") {
    res.json(books);
  }

  if (req.query.price == "500") {
    const filteredArray = books.filter((book) => book.price <= 500);
    res.json(filteredArray);
  }
  else{
    res.json(books)
  }


}

app.get("/books", booksHandler);

app.post('/books', (req,res) => {

    const book = req.body;
    books.push(book)
    res.send('New Book added')
})

app.listen(8000, () => {
  console.log(`Server is listening on port ${8000}`);
});
