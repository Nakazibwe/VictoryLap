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
  dateofbirth: {
    type: Date,
    trim: true,
    required: true,
  },
  occupation: {
    type: String,
    trim: true,
    required: true,
  },
  nationality: {
    type: String,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    trim: true,
    required: true,
  },
  category: {
    type: String,
    trim: true,
    required: true,
  },

});
module.exports = mongoose.model('PatientReg', patientRegSchema);
