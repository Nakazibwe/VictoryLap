/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */

// Requiring depencies.
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// PORT.
const port = 3000;

// Assiging express to app.
const app = express();

// Requiring dotenv.
require('dotenv').config();

// Database connection.
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection is now  open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// Requiring routes.
const TemplateRoutes = require('./routes/templateRoutes');

// Requiring models.
const TemplateReg = require('./models/templateModels');


// Configurations.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/views'));



// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));
app.use('/public/imagefiles', express.static(__dirname + '/public/imagefiles'));

// Routes for the project.
// app.use('/', TemplateRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});



// Listening port.
app.listen(port, () => {
  console.log(`We are currently listening on port ${port}`);
});
