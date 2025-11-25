const express = require("express");
const path = require("path");
const app = express();

const bodyparser = require("body-parser");
const { body, validationResult } = require("express-validator");

// middleware for POST parsing
const reqparse = bodyparser.urlencoded({ extended: true });

// Serve register.html

app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "register.html"));
});

// POST route with express-validator

app.post(
    "/setuser",
    reqparse,

    // Validation rules
    [
        body("username")
            .notEmpty().withMessage("Username is required")
            .isLength({ min: 3 }).withMessage("Username must be at least 3 characters"),

        body("password")
            .notEmpty().withMessage("Password is required")
            .isLength({ min: 5 }).withMessage("Password must be at least 5 characters")
    ],
    function (req, res) {

        const errors = validationResult(req);

        // If validation failed
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // If validation passed
        const response = {
            name: req.body.username,
            pass: req.body.password
        };

        res.json(response);
    }
);

app.listen(4000, function () {
    console.log("Listening on port 4000");
});