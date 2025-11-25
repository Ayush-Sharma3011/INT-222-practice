const express = require("express");
const path = require("path");
const app = express();

// Use express's built-in body parser for form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // optional, for JSON bodies

// Serve register.html (static file)
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

// GET handler (example: /setuser?username=abc&password=123)
app.get("/setuser", (req, res) => {
  const response = {
    uname: req.query.username || null,
    pass: req.query.password || null
  };
  res.json(response);
});

// POST handler (form post to /setuser1)
app.post("/setuser1", (req, res) => {
  const response = {
    name: req.body.username ,
    pass: req.body.password 
  };
  res.json(response);
});

// Start server on port 4000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(
    `Listening on port ${PORT}`);
});