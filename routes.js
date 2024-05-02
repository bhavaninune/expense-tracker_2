// routes.js

const express = require('express');
const router = express.Router();

// Import your signup controller
const { signup } = require('../Controllers/signupController'); // Adjust the path as per your project structure

// Define routes
router.post('/signup', signup); // Use the signup function directly

module.exports = router;
