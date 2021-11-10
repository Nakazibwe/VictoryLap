/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
const express = require('express');

const port = 3000;
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Configurations.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));
app.use('/public/imagefiles', express.static(__dirname + '/public/imagefiles'));

// Routes for the project.
app.get('/', (req, res) => {
//   res.render('index');
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log(`We are listening on port ${port}`);
});
