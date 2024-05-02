// signupController.js

// Example signup controller
exports.signup = (req, res) => {
    // Retrieve form data from request body
    const { name, email, password } = req.body;
    
    // Validate form data
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Please provide name, email, and password' });
    }

    
    res.status(200).json({ message: 'Signup successful' });
};

