const express = require('express');
const logger = require('morgan');

// Generic application setup
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Load routes into variables
const books = require('./api/controller/book');

// Routes
app.use('/books', books);


module.exports = app;
