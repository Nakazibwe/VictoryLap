/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const express = require('express');

const patientRegSchema = new mongoose.Schema({
  Surname: {
    type: String,
    trim: true,
    required: true,
  },
  Givenname: {
    type: String,
    trim: true,
    required: true,
  },

});
module.exports = mongoose.model('PatientReg', patientRegSchema);
