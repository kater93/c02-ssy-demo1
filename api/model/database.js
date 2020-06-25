const Loki = require("lokijs"); // temporäre objektdatenbank

const Book = require("./book");

const db = new Loki("book.json");
const books = db.addCollection('books'); // collection meint eine neue tabelle

books.insert(new Book("123", "Franz Kafka", "Der Prozess", 5.66));

module.exports = db;