const express = require("express");
const cors = require("cors");
const booksData = require("./data/books.json");

const app = express();

app.use(cors());

const getRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    return randomBook;
};

app.get("/random-book", (req, res) => {
    // const randomIndex = Math.floor(Math.random() * booksData.length);
    // const randomBook = booksData[randomIndex];
    res.json(getRandomBook());
});

app.get("/random-book-delayed", (req, res) => {
    // const randomIndex = Math.floor(Math.random() * booksData.length);
    // const randomBook = booksData[randomIndex];
    setTimeout(() => {
        res.json(getRandomBook());
    }, 2000);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
