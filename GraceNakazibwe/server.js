/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
const express = require('express');

const port = 3000;
const mongoose = require('mongoose');
const path = require('path');

const app = express();

require('dotenv').config();

// Database connection.
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection now  open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// Requiring routes.
const PatientReg = require('./routes/patientRegRoutes');

// Configurations.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));
app.use('/public/imagefiles', express.static(__dirname + '/public/imagefiles'));

// Routes for the project.
app.use('/', PatientReg);



app.listen(port, () => {
  console.log(`We are listening on port ${port}`);
});
