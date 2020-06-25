const express = require('express');
const router = express.Router();

const db = require('../model/database-book');
const Book = require('../model/book');

// GET http://localhost:3000/books
// POST http://localhost:3000/books

router.get('/', getBookList);
router.post('/', newBook);

function getBookList(req, res) {
    const bookCollection = db.getCollection('books'); // auf collection zugreifen
    const books = bookCollection.find(); // find({}) überlicherweise anonymes Objekt

    console.log(books);


    const results = [];

    res.json(books);

    /*
    for (let book of books) {
        results.push({
            isbn: book.isbn

        }); // objekt hinzufügen
    }
    */

}

function newBook(req, res) {
    const isbn = req.body.isbn;
    const author = req.body.author;
    const title = req.body.title;
    const price = req.body.price;

    const book = new Book(isbn, author, title, price);
    const bookCollection = db.getCollection('books');
    bookCollection.insert(book);


}

module.exports = router;