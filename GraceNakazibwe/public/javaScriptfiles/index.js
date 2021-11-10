/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// Assigning variables to the inputs.
const surname = document.patientform.Surname;
const givenname = document.patientform.Givenname;
const patientDOB = document.patientform.dateofbirth;
const patientresidence = document.patientform.residence;
const patientoccupation = document.patientform.occupation;
const patientnationality = document.patientform.nationality;
const patientcategory = document.patientform.category;
const malegender = document.getElementById('male');
const femalegender = document.getElementById('female');

// Assigning variables to the error messages of the inputs.
const surnameERROR = document.getElementById('surname-error');
const givennameERROR = document.getElementById('givename-error');
const patientDOBError = document.getElementById('DOB-error');
const patienceResidenceERROR = document.getElementById('Residence-error');
const patienceOccupationERROR = document.getElementById('Occuration-error');
const patientnationalityERROR = document.getElementById('Nationality-error');
const patientcategoryERROR = document.getElementById('category-error');

// Assigning variable to the success .
const successMessage = document.getElementById('form-success');
const successIcon = document.getElementById('icon');

// Regular expressions.
const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;


// Validation function.
const validate = (event) => {
  let isValid = true;
  // Validating the surname
  const surName = surname.value.trim();
  if (surName == '') {
    surnameERROR.innerHTML = 'This Field is required';
    surnameERROR.style = 'color:red';
    surname.style.border = '1px solid red';
    surname.focus();
    isValid = false;
  } else if (!(surName.length > 1 && surName.length < 16)) {
    surnameERROR.innerHTML = 'Surname is between 1-16 characters';
    surnameERROR.style = 'color:red';
    surname.style.border = '1px solid red';
    surname.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'background-color:#0bda51 ; color:#fff; font-weight:500;';
    successMessage.style.border = '1px solid #0bda51 ';
  }
  // Validating  the given name.
  const givenName = givenname.value.trim();
  if (givenName == '') {
    givennameERROR.innerHTML = 'This Field is required';
    givennameERROR.style = 'color:red';
    givenname.style.border = '1px solid red';
    givenname.focus();
    isValid = false;
  } else if (!(givenName.length > 1 && givenName.length < 16)) {
    givennameERROR.innerHTML = 'Given name is between 1-16 characters';
    givennameERROR.style = 'color:red';
    givenname.style.border = '1px solid red';
    givenname.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'background-color:#0bda51 ; color:#fff; font-weight:500;';
    successMessage.style.border = '1px solid #0bda51 ';
  }

  // Validating the date of birth.
  const today = new Date();
  const birth = new Date(patientDOB.value);
  const age = today.getFullYear() - birth.getFullYear();
  
  if (patientDOB.checked == false && patientDOB.value == '') {
    patientDOBError.innerHTML = 'This field is required';
    patientDOBError.style = 'color:red';
    patientDOB.style.border = '1px solid red';
    patientDOB.focus();
    isValid = false;
  } else if (age < 1) {
    patientDOBError.innerHTML = 'Patient is young to do the test';
    patientDOBError.style = 'color:red';
    patientDOB.style.border = '1px solid red';
    patientDOB.focus();
    isValid = false;
  } else if (age > 150) {
    patientDOBError.innerHTML = 'Patient is too old to do test';
    patientDOBError.style = 'color:red';
    patientDOB.style.border = '1px solid red';
    patientDOB.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'background-color:#0bda51 ; color:#fff; font-weight:500;';
    successMessage.style.border = '1px solid #0bda51';
  }

  // Validating the place of residence.
  const patientResidence = patientresidence.value.trim();
  if (patientResidence == '') {
    patienceResidenceERROR.innerHTML = 'This Field is required';
    patienceResidenceERROR.style = 'color:red';
    patientresidence.style.border = '1px solid red';
    patientresidence.focus();
    isValid = false;
  } else if (!(patientResidence.length > 1 && patientResidence.length < 20)) {
    patienceResidenceERROR.innerHTML = 'Residence should be between 1-20 characters';
    patienceResidenceERROR.style = 'color:red';
    patientresidence.style.border = '1px solid red';
    patientresidence.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'background-color:#0bda51 ; color:#fff; font-weight:500;';
    successMessage.style.border = '1px solid #0bda51 ';
  }

  // Validating the occupation input.
  const patientOccupation = patientoccupation.value.trim();
  if (patientOccupation == '') {
    patienceOccupationERROR.innerHTML = 'This Field is required';
    patienceOccupationERROR.style = 'color:red';
    patientoccupation.style.border = '1px solid red';
    patientoccupation.focus();
    isValid = false;
  } else if (!(patientOccupation.length > 5 && patientOccupation.length < 20)) {
    patienceOccupationERROR.innerHTML = 'Occupation should be between 5-20 characters';
    patienceOccupationERROR.style = 'color:red';
    patientoccupation.style.border = '1px solid red';
    patientoccupation.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'background-color:#0bda51 ; color:#fff; font-weight:500;';
    successMessage.style.border = '1px solid #0bda51 ';
  }
  // Validating  the nationality.
  const patientNationality = patientnationality.value.trim();
  if (patientNationality == '') {
    patientnationalityERROR.innerHTML = 'This field is required';
    patientnationalityERROR.style = 'color:red';
    patientnationality.style.border = '1px solid red';
    patientnationality.focus();
    isValid = false;
  } else if (!(patientNationality.length > 5 && patientNationality.length < 20)) {
    patientnationalityERROR.innerHTML = 'Nationality should be between 5-20 characters';
    patientnationalityERROR.style = 'color:red';
    patientnationality.style.border = '1px solid red';
    patientnationality.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'background-color:#0bda51 ; color:#fff; font-weight:500;';
    successMessage.style.border = '1px solid #0bda51';
  }
  // Validating the category.
  const patientCategory = patientcategory.value.trim();
  if (patientCategory == 'default') {
    patientcategoryERROR.innerHTML = 'This field is required';
    patientcategoryERROR.style = 'color:red';
    patientcategory.style.border = '1px solid red';
    patientcategory.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'background-color:#0bda51 ; color:#fff; font-weight:500;';
    successMessage.style.border = '1px solid #0bda51';
  }

  if (!isValid) {
    event.preventDefault();
    return false;
  }
};

// Assigning a variable to the form.
const Patientform = document.getElementById('form-id');

// Adding an event listener.
Patientform.addEventListener('submit', (event) => {
  validate(event);
});
