/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const PatientsReg = require('../models/patientRegModels');

// Route to the registration page.
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  try {
    const patientsReg = new PatientsReg(req.body);
    await patientsReg.save((err) => {
      // console.log(patientsReg)
      if (err) {
        throw err;
      }
      res.redirect('/').send('You  have successfully sent a message');
    });
  } catch (error) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(error);
  }
});

module.exports = router;
