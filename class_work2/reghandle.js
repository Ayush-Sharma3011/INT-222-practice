const express = require("express");
const path = require("path");        
const app = express();

// Serve register.html
app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "register.html"));
});

// Handle GET request for /setuser
app.post("/setuser", function(req,res){
  const  response={
        uname:req.query.username,
        pass:req.query.password
    }
    res.json(response)
})

// Start server
app.listen(3000, function () {
    console.log("Listening on port 3000");
});