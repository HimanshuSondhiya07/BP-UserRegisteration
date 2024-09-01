const express = require('express');
const router = express.Router();

router.post('/register', (req, res, next) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;

  // Validate First Name and Last Name
  if (!/^[A-Z]/.test(firstName) || !/^[A-Z]/.test(lastName)) {
    return next({ statusCode: 400, message: 'First and last names must start with a capital letter.' });
  }

  // Validate Password
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
  if (!passwordRegex.test(password)) {
    return next({
      statusCode: 400,
      message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.',
    });
  }

  // Validate Email Address
  if (!/@/.test(email)) {
    return next({ statusCode: 400, message: 'Invalid email address. Email must contain "@" symbol.' });
  }

  // Validate Phone Number
  if (phoneNumber.length < 10) {
    return next({ statusCode: 400, message: 'Phone number must be at least 10 digits long.' });
  }

  // If all validations pass
  res.status(201).json({
    success: true,
    message: 'User registered successfully!',
  });
});

module.exports = router;
