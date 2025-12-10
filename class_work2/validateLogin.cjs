const {check} = require('express-validator');

const validateLogin = [
    check('username').notEmpty().withMessage('Username is required'),
    check('email').isEmail().withMessage('Invalid Email format'),
    check('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
]

module.exports = {validateLogin};