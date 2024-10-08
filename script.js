const form = document.getElementById('registration-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const addressInput = document.getElementById('address');
const emailInput = document.getElementById('email');
const phoneNoInput = document.getElementById('phone-no');
const genderInput = document.getElementById('gender');
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const addressError = document.getElementById('address-error');
const emailError = document.getElementById('email-error');
const phoneNoError = document.getElementById('phone-no-error');
const genderError = document.getElementById('gender-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // Validate First Name
  if (firstNameInput.value.trim() === '') {
    firstNameError.textContent = 'First Name is required';
    isValid = false;
  } else {
    firstNameError.textContent = '';
  }

  // Validate Last Name
  if (lastNameInput.value.trim() === '') {
    lastNameError.textContent = 'Last Name is required';
    isValid = false;
  } else {
    lastNameError.textContent = '';
  }

  // Validate Address
  if (addressInput.value.trim() === '') {
    addressError.textContent = 'Address is required';
    isValid = false;
  } else {
    addressError.textContent = '';
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Invalid Email';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Validate Phone No
  if (phoneNoInput.value.trim() === '') {
    phoneNoError.textContent = 'Phone No is required';
    isValid = false;
  } else if (!validatePhoneNo(phoneNoInput.value)) {
    phoneNoError.textContent = 'Invalid Phone No';
    isValid = false;
  } else {
    phoneNoError.textContent = '';
  }

  // Validate Gender
  if (genderInput.value === '') {
    genderError.textContent = 'Gender is required';
    isValid = false;
  } else {
    genderError.textContent = '';
  }

  if (isValid) {
    // Form is valid, submit the form
    form.submit();
  }
});

// Helper function to validate email
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Helper function to validate phone no
function validatePhoneNo(phoneNo) {
  const phoneNoRegex = /^\d{10}$/;
  return phoneNoRegex.test(phoneNo);
}