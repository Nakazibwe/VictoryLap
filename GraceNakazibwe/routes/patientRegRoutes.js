/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

// Route to the registration page.
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;