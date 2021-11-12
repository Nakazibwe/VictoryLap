const express = require('express');
const mongoose = require('mongoose');

// Require the model. 
const TemplateReg = require('../models/templateModels');

const router = express.Router();

// get route.
router.get('/', (req, res) => {
  res.render('index');
});

// post route.

// router.post('/', async (req, res) => {
    
// });
module.exports = router;
