const express = require("express");
const cookieSession = require("cookie-session");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));

// Cookie-session middleware
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],   // encryption keys
    maxAge: 24 * 60 * 60 * 1000  // 24 hours
  })
);

// Serve HTML Form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form1.html"));
});

// On form submission → store value in session
app.post("/login", (req, res) => {
  const name = req.body.username;

  // Save data in session (NOT a normal cookie)
  req.session.user = name;

  res.send(`Session created! <br> <a href="/profile">Go to Profile</a>`);
});

// Read session data
app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.send("No session found! <a href='/'>Go home</a>");
  }

  res.send(`Welcome, ${req.session.user}! <br>
           <a href="/logout">Logout</a>`);
});

// Destroy session
app.get("/logout", (req, res) => {
  req.session = null; // clear session
  res.send("Session destroyed! <a href='/'>Login Again</a>");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});